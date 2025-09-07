"use client";

import { useFormState, useFormStatus } from "react-dom";
import { findMentorsAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const initialState = {
  recommendations: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Finding...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Find Mentors
        </>
      )}
    </Button>
  );
}

export default function MentorFinderPage() {
  const [state, formAction] = useFormState(findMentorsAction, initialState);

  return (
    <div className="flex flex-col h-full">
       <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mentor Finder</h1>
          <p className="text-muted-foreground">
            Get AI-powered mentor recommendations based on your interests.
          </p>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <Card>
          <CardContent className="p-6">
            <form action={formAction} className="space-y-4">
              <label htmlFor="interests" className="block text-sm font-medium text-foreground">
                What are your career interests and what guidance are you looking for?
              </label>
              <Textarea
                id="interests"
                name="interests"
                placeholder="e.g., 'I'm interested in breaking into product management in the fintech space and would love advice on key skills to develop.'"
                rows={5}
                required
              />
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6">
          {state.error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {state.recommendations && (
             <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recommended Mentors</h3>
                  <div
                    className="prose dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap"
                  >
                    {state.recommendations}
                  </div>
                </CardContent>
             </Card>
          )}
        </div>
      </main>
    </div>
  );
}
