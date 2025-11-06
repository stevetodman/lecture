/**
 * Zod validation schema
 * Runtime safety that matches our TypeScript definitions
 */

import { z } from "zod";

export const ManeuverEffectSchema = z.enum(["↑", "↓", "↔"]);

export const DifficultySchema = z.enum(["easy", "core", "hard"]);

export const SiteSchema = z.enum([
  "RUSB",
  "LLSB",
  "Apex",
  "LUSB",
  "L infraclavicular",
]);

export const MurmurCaseSchema = z.object({
  id: z.string().min(1),
  media: z.object({
    audio_url: z.string(),
    image_url: z.string(),
  }),
  choices: z.tuple([
    z.string(),
    z.string(),
    z.string(),
    z.string(),
    z.string(),
  ]),
  answer: z.string(),
  explain: z.object({
    correct: z.string(),
    differentials: z.array(z.string()).min(3),
  }),
  tags: z.array(z.string()),
  maneuver_effects: z.object({
    standing: ManeuverEffectSchema.optional(),
    squat: ManeuverEffectSchema.optional(),
    inspiration: ManeuverEffectSchema.optional(),
  }),
  meta: z.object({
    difficulty: DifficultySchema,
    site_hint: SiteSchema,
  }),
});

export const validateCase = (data: unknown) => {
  return MurmurCaseSchema.parse(data);
};
