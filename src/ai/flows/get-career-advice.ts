
'use server';
/**
 * @fileOverview An AI agent that provides career advice.
 *
 * - getCareerAdvice - A function that provides career advice based on a user's prompt.
 * - GetCareerAdviceInput - The input type for the getCareerAdvice function.
 * - GetCareerAdviceOutput - The return type for the getCareerAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetCareerAdviceInputSchema = z.object({
  prompt: z
    .string()
    .describe('The user\'s question or prompt for career advice.'),
});
export type GetCareerAdviceInput = z.infer<
  typeof GetCareerAdviceInputSchema
>;

const GetCareerAdviceOutputSchema = z.object({
  advice: z
    .string()
    .describe(
      'The generated career advice.'
    ),
});
export type GetCareerAdviceOutput = z.infer<
  typeof GetCareerAdviceOutputSchema
>;

export async function getCareerAdvice(
  input: GetCareerAdviceInput
): Promise<GetCareerAdviceOutput> {
  return getCareerAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getCareerAdvicePrompt',
  input: {schema: GetCareerAdviceInputSchema},
  output: {schema: GetCareerAdviceOutputSchema},
  prompt: `You are an expert career coach and mentor for university students and alumni.

  A user is asking for career advice. Provide a thoughtful, encouraging, and actionable response to their question.

  User's question: {{{prompt}}}
  
  Your advice should be:
  - Clear and easy to understand.
  - Broken down into actionable steps if possible.
  - Positive and motivating.
  - Tailored to the user's question.
  `,
});

const getCareerAdviceFlow = ai.defineFlow(
  {
    name: 'getCareerAdviceFlow',
    inputSchema: GetCareerAdviceInputSchema,
    outputSchema: GetCareerAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
