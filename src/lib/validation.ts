import { z } from "zod";

export const professionalRoles = [
  "Managing Partner",
  "LLP Partner",
  "Lawyer / Advocate",
  "Finance / Accounts Professional",
  "Legal Operations Professional",
  "Other",
] as const;
export const firmSizes = [
  "Solo Practice",
  "2–5 People",
  "6–10 People",
  "11–25 People",
  "26–50 People",
  "50+ People",
] as const;
export const challenges = [
  "Billable Hours Tracking",
  "Partner Profit Sharing",
  "Expense Management",
  "Invoice and Payment Reconciliation",
  "Partner Payouts",
  "Financial Reporting",
  "Other",
] as const;

const email = z
  .string()
  .trim()
  .email("Enter a valid email address.")
  .max(254)
  .transform((value) => value.toLowerCase());
const optionalText = (length: number) =>
  z.string().trim().max(length).optional().default("");

export const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email,
  professionalRole: z.enum(professionalRoles, {
    message: "Select your professional role.",
  }),
  organisationName: optionalText(160),
  firmSize: z
    .union([z.enum(firmSizes), z.literal("")])
    .optional()
    .default(""),
  primaryChallenge: z
    .union([z.enum(challenges), z.literal("")])
    .optional()
    .default(""),
  privacyConsent: z
    .boolean()
    .refine((value) => value, "Please agree to the Privacy Notice."),
  website: optionalText(120),
});

export const feedbackSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email,
  message: z
    .string()
    .trim()
    .min(15, "Please share a little more detail.")
    .max(3000),
  privacyConsent: z
    .boolean()
    .refine((value) => value, "Please agree to the Privacy Notice."),
  website: optionalText(120),
});

export type WaitlistInput = z.input<typeof waitlistSchema>;
export type FeedbackInput = z.input<typeof feedbackSchema>;
