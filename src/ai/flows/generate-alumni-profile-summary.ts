'use server';

/**
 * @fileOverview A flow that generates a concise summary of an alumni's profile.
 *
 * - generateAlumniProfileSummary - A function that generates a summary of an alumni profile.
 * - GenerateAlumniProfileSummaryInput - The input type for the generateAlumniProfileSummary function.
 * - GenerateAlumniProfileSummaryOutput - The return type for the generateAlumniProfileSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlumniProfileSummaryInputSchema = z.object({
  profileDetails: z
    .string()
    .describe('The detailed profile information of the alumni.'),
});
export type GenerateAlumniProfileSummaryInput = z.infer<
  typeof GenerateAlumniProfileSummaryInputSchema
>;

const GenerateAlumniProfileSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the alumni profile, highlighting key skills and experience.'
    ),
});
export type GenerateAlumniProfileSummaryOutput = z.infer<
  typeof GenerateAlumniProfileSummaryOutputSchema
>;

export async function generateAlumniProfileSummary(
  input: GenerateAlumniProfileSummaryInput
): Promise<GenerateAlumniProfileSummaryOutput> {
  return generateAlumniProfileSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAlumniProfileSummaryPrompt',
  input: {schema: GenerateAlumniProfileSummaryInputSchema},
  output: {schema: GenerateAlumniProfileSummaryOutputSchema},
  prompt: `You are an AI assistant designed to summarize alumni profiles.

  Given the following alumni profile details, generate a concise summary highlighting their key skills and experience. This summary will be used to help users quickly assess the alumni's relevance for networking or mentorship.

  Profile Details:
  {{profileDetails}}`,
});

const generateAlumniProfileSummaryFlow = ai.defineFlow(
  {
    name: 'generateAlumniProfileSummaryFlow',
    inputSchema: GenerateAlumniProfileSummaryInputSchema,
    outputSchema: GenerateAlumniProfileSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
