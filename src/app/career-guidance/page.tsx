
"use client";

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Bot, User } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { giveCareerAdvice } from './actions';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const initialState: { messages: Message[], error: string | null } = {
  messages: [],
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting advice...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Send
        </>
      )}
    </Button>
  );
}

export default function CareerGuidancePage() {
  const [state, formAction] = useFormState(giveCareerAdvice, initialState);
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-full">
      <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Bot /> AI Career Coach
          </h1>
          <p className="text-muted-foreground">
            Get personalized career advice and guidance from our AI assistant.
          </p>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="space-y-4">
          {state.messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'assistant' && <Bot className="h-8 w-8 text-primary" />}
              <div className={`rounded-lg p-3 max-w-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && <User className="h-8 w-8" />}
            </div>
          ))}
        </div>

        {state.error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
        )}
      </main>

      <footer className="bg-card border-t p-4">
        <form
          action={(formData) => {
            formAction(formData);
            setInput('');
          }}
          className="flex gap-4"
        >
          <Textarea
            id="prompt"
            name="prompt"
            placeholder="Ask for career advice... e.g., 'How can I transition into a product manager role?'"
            rows={1}
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 resize-none"
          />
          <SubmitButton />
        </form>
      </footer>
    </div>
  );
}
