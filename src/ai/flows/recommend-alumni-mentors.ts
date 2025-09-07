'use server';
/**
 * @fileOverview An AI agent that recommends relevant alumni mentors to students based on their career interests and alumni skills.
 *
 * - recommendAlumniMentors - A function that recommends alumni mentors.
 * - RecommendAlumniMentorsInput - The input type for the recommendAlumniMentors function.
 * - RecommendAlumniMentorsOutput - The return type for the recommendAlumniMentors function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendAlumniMentorsInputSchema = z.object({
  studentCareerInterests: z
    .string()
    .describe('The career interests of the student.'),
  alumniProfiles: z
    .string()
    .describe(
      'A list of alumni profiles, including their skills and experience.'
    ),
});
export type RecommendAlumniMentorsInput = z.infer<
  typeof RecommendAlumniMentorsInputSchema
>;

const RecommendAlumniMentorsOutputSchema = z.object({
  recommendedMentors: z
    .string()
    .describe(
      'A list of recommended alumni mentors based on the student\'s career interests and their skills.'
    ),
});
export type RecommendAlumniMentorsOutput = z.infer<
  typeof RecommendAlumniMentorsOutputSchema
>;

export async function recommendAlumniMentors(
  input: RecommendAlumniMentorsInput
): Promise<RecommendAlumniMentorsOutput> {
  return recommendAlumniMentorsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendAlumniMentorsPrompt',
  input: {schema: RecommendAlumniMentorsInputSchema},
  output: {schema: RecommendAlumniMentorsOutputSchema},
  prompt: `You are an AI assistant designed to recommend alumni mentors to students based on their career interests and the alumni's skills.

  Student Career Interests: {{{studentCareerInterests}}}
  Alumni Profiles: {{{alumniProfiles}}}

  Based on the student's career interests and the skills listed in the alumni profiles, recommend the best alumni mentors to connect with.
  Ensure that the recommended mentors have skills and experience that align with the student's interests.
  Format your response as a list of names and a brief description of why they are a good fit.
  `,
});

const recommendAlumniMentorsFlow = ai.defineFlow(
  {
    name: 'recommendAlumniMentorsFlow',
    inputSchema: RecommendAlumniMentorsInputSchema,
    outputSchema: RecommendAlumniMentorsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
