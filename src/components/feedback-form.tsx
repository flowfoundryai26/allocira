"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { feedbackSchema } from "@/lib/validation";

type FormInput = z.input<typeof feedbackSchema>;
type FormOutput = z.output<typeof feedbackSchema>;
export function FeedbackForm() {
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
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      privacyConsent: false,
      website: "",
    },
  });
  async function submit(values: FormOutput) {
    setResult(null);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setResult({
          kind: "error",
          message: data.message || "Feedback could not be sent.",
        });
        return;
      }
      reset();
      setResult({
        kind: "success",
        message: data.message || "Thank you for your feedback.",
      });
    } catch {
      setResult({
        kind: "error",
        message: "We couldn't connect right now. Please email us instead.",
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="grid gap-4"
      aria-label="Share product feedback"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="feedback-name" className="form-label">
            Full Name
          </label>
          <Input
            id="feedback-name"
            autoComplete="name"
            required
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="form-error">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="feedback-email" className="form-label">
            Email Address
          </label>
          <Input
            id="feedback-email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="feedback-message" className="form-label">
          Your Feedback
        </label>
        <Textarea
          id="feedback-message"
          required
          placeholder="Tell us about your firm's current workflow or the challenge you'd like solved."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="form-error">{errors.message.message}</p>
        )}
      </div>
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="feedback-website">Website</label>
        <input
          id="feedback-website"
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
            <Link href="/privacy" className="text-[#a9c9ff] underline">
              Privacy Notice
            </Link>{" "}
            and consent to being contacted about this feedback.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="form-error">{errors.privacyConsent.message}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send Feedback"}
        </Button>
        <span className="text-xs text-slate-400">
          Feedback does not add you to the waitlist.
        </span>
      </div>
      {result && (
        <p
          role={result.kind === "error" ? "alert" : "status"}
          className={`rounded-xl border p-4 text-sm ${result.kind === "success" ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100" : "border-red-300/30 bg-red-300/10 text-red-100"}`}
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
