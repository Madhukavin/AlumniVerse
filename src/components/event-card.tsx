import type { Event } from "@/lib/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, CalendarPlus } from "lucide-react";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          className="object-cover"
          data-ai-hint="event photo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {event.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full">RSVP</Button>
        <Button variant="outline" className="w-full">
          <CalendarPlus className="mr-2 h-4 w-4" />
          Add to Calendar
        </Button>
      </CardFooter>
    </Card>
  );
}
