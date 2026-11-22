-- Run individual statements in the authenticated Supabase SQL Editor.
select count(*) as total_registrations from public.waitlist_subscribers;

select (created_at at time zone 'Asia/Kolkata')::date as registration_date, count(*) as registrations
from public.waitlist_subscribers group by 1 order by 1 desc;

select professional_role, count(*) as registrations
from public.waitlist_subscribers group by 1 order by 2 desc, 1;

select coalesce(firm_size, 'Unspecified') as firm_size, count(*) as registrations
from public.waitlist_subscribers group by 1 order by 2 desc, 1;

select coalesce(primary_challenge, 'Unspecified') as challenge, count(*) as registrations
from public.waitlist_subscribers group by 1 order by 2 desc, 1;

-- Active subscriber export, ordered consistently for the results panel.
select full_name, email, professional_role, organisation_name, firm_size,
       primary_challenge, consent_timestamp, privacy_notice_version, created_at
from public.waitlist_subscribers
where status = 'active' and privacy_consent
order by created_at, id;
