-- Run in the Supabase SQL editor or with the Supabase CLI before deploying.
create extension if not exists pgcrypto;

create table public.waitlist_subscribers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null,
  professional_role text not null check (professional_role in ('Managing Partner','LLP Partner','Lawyer / Advocate','Finance / Accounts Professional','Legal Operations Professional','Other')),
  organisation_name text,
  firm_size text check (firm_size in ('Solo Practice','2–5 People','6–10 People','11–25 People','26–50 People','50+ People')),
  primary_challenge text check (primary_challenge in ('Billable Hours Tracking','Partner Profit Sharing','Expense Management','Invoice and Payment Reconciliation','Partner Payouts','Financial Reporting','Other')),
  privacy_consent boolean not null check (privacy_consent = true),
  consent_timestamp timestamptz not null,
  privacy_notice_version text not null default '2026-11-22',
  status text not null default 'active' check (status in ('pending','active','unsubscribed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint waitlist_email_normalised check (email = lower(trim(email)))
);
create unique index waitlist_email_unique on public.waitlist_subscribers (lower(email));
create index waitlist_created_at_idx on public.waitlist_subscribers (created_at desc);
create index waitlist_role_idx on public.waitlist_subscribers (professional_role);

create table public.product_feedback (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null check (email = lower(trim(email))),
  message text not null check (char_length(trim(message)) between 15 and 3000),
  privacy_consent boolean not null check (privacy_consent = true),
  consent_timestamp timestamptz not null,
  privacy_notice_version text not null default '2026-11-22',
  created_at timestamptz not null default now()
);
create index feedback_created_at_idx on public.product_feedback (created_at desc);

create table public.submission_rate_limits (
  key text primary key,
  count integer not null check (count >= 0),
  window_start timestamptz not null
);
create index submission_rate_limits_window_idx on public.submission_rate_limits (window_start);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger waitlist_updated_at before update on public.waitlist_subscribers
for each row execute function public.set_updated_at();

create or replace function public.check_submission_rate_limit(p_key text, p_limit integer, p_window_seconds integer)
returns boolean language plpgsql security definer set search_path = public as $$
declare current_count integer;
begin
  if p_key !~ '^[a-f0-9]{64}$' or p_limit < 1 or p_limit > 100 or p_window_seconds < 60 or p_window_seconds > 86400 then
    raise exception 'Invalid rate-limit arguments';
  end if;
  insert into public.submission_rate_limits as limits (key, count, window_start)
  values (p_key, 1, now())
  on conflict (key) do update set
    count = case when limits.window_start <= now() - make_interval(secs => p_window_seconds) then 1 else limits.count + 1 end,
    window_start = case when limits.window_start <= now() - make_interval(secs => p_window_seconds) then now() else limits.window_start end
  returning count into current_count;
  return current_count <= p_limit;
end; $$;

alter table public.waitlist_subscribers enable row level security;
alter table public.product_feedback enable row level security;
alter table public.submission_rate_limits enable row level security;
revoke all on public.waitlist_subscribers, public.product_feedback, public.submission_rate_limits from anon, authenticated;
revoke all on function public.check_submission_rate_limit(text, integer, integer) from public, anon, authenticated;
grant all on public.waitlist_subscribers, public.product_feedback, public.submission_rate_limits to service_role;
grant execute on function public.check_submission_rate_limit(text, integer, integer) to service_role;
