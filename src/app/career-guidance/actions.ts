
"use server";

import { getCareerAdvice } from "@/ai/flows/get-career-advice";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export async function giveCareerAdvice(
  prevState: { messages: Message[]; error: string | null },
  formData: FormData
) {
  const prompt = formData.get("prompt") as string;

  if (!prompt) {
    return {
      ...prevState,
      error: "Please enter a question.",
    };
  }

  const newMessages: Message[] = [...prevState.messages, { role: 'user', content: prompt }];
  
  try {
    const result = await getCareerAdvice({
      prompt: prompt,
    });
    
    newMessages.push({ role: 'assistant', content: result.advice });

    return {
      messages: newMessages,
      error: null,
    };
  } catch (e) {
    console.error(e);
    return {
      ...prevState,
      error: "An error occurred while getting advice. Please try again.",
    };
  }
}
