"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  professionalRoles,
  firmSizes,
  challenges,
  waitlistSchema,
} from "@/lib/validation";

type FormInput = z.input<typeof waitlistSchema>;
type FormOutput = z.output<typeof waitlistSchema>;
export function WaitlistForm() {
  const [result, setResult] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organisationName: "",
      firmSize: "",
      primaryChallenge: "",
      privacyConsent: false,
      website: "",
    },
  });
  async function submit(values: FormOutput) {
    setResult(null);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setResult({
          kind: "error",
          message:
            data.message ||
            "Registration could not be completed. Please try again.",
        });
        return;
      }
      reset();
      setResult({
        kind: "success",
        message: data.message || "You're on the list!",
      });
    } catch {
      setResult({
        kind: "error",
        message: "We couldn't connect right now. Please try again later.",
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="grid gap-5"
      aria-label="Join the Allocira waitlist"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wait-name" className="form-label">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <Input
            id="wait-name"
            autoComplete="name"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "wait-name-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="wait-name-error" className="form-error">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="wait-email" className="form-label">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <Input
            id="wait-email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "wait-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="wait-email-error" className="form-error">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wait-role" className="form-label">
            Professional Role <span aria-hidden="true">*</span>
          </label>
          <div className="select-wrap">
            <select
              id="wait-role"
              required
              className="form-select"
              defaultValue=""
              aria-invalid={!!errors.professionalRole}
              {...register("professionalRole")}
            >
              <option value="" disabled>
                Select your role
              </option>
              {professionalRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          {errors.professionalRole && (
            <p className="form-error">{errors.professionalRole.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="wait-org" className="form-label">
            Law Firm / Organisation Name{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <Input
            id="wait-org"
            autoComplete="organization"
            {...register("organisationName")}
          />
          {errors.organisationName && (
            <p className="form-error">{errors.organisationName.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wait-size" className="form-label">
            Firm Size{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <div className="select-wrap">
            <select
              id="wait-size"
              className="form-select"
              defaultValue=""
              {...register("firmSize")}
            >
              <option value="">Select firm size</option>
              {firmSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="wait-challenge" className="form-label">
            Biggest Financial Management Challenge{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <div className="select-wrap">
            <select
              id="wait-challenge"
              className="form-select"
              defaultValue=""
              {...register("primaryChallenge")}
            >
              <option value="">Select a challenge</option>
              {challenges.map((challenge) => (
                <option key={challenge} value={challenge}>
                  {challenge}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="wait-website">Website</label>
        <input
          id="wait-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
          <input
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 accent-[#4f8cff]"
            aria-invalid={!!errors.privacyConsent}
            {...register("privacyConsent")}
          />
          <span>
            I agree to the{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#a9c9ff] underline"
            >
              Privacy Notice
            </Link>{" "}
            and consent to my details being used to contact me about
            Allocira&apos;s development and early-access opportunities.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="form-error">{errors.privacyConsent.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Joining…" : "Join the Waitlist"}
        </Button>
        <p className="text-xs leading-5 text-slate-400">
          Free to join. No product access is available yet.
        </p>
      </div>
      {result && (
        <p
          role={result.kind === "error" ? "alert" : "status"}
          className={`rounded-xl border p-4 text-sm leading-6 ${result.kind === "success" ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100" : "border-red-300/30 bg-red-300/10 text-red-100"}`}
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
