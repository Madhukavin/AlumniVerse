import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";
import { events } from "@/lib/mock-data";
import { PlusCircle } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Alumni Events</h1>
            <p className="text-muted-foreground">
              Stay connected with upcoming gatherings and meetups.
            </p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}
