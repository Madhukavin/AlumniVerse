import type { Alumni } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Plus } from "lucide-react";

type AlumniCardProps = {
  alumni: Alumni;
};

export function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        <Avatar className="w-16 h-16 border-2 border-accent">
          <AvatarImage src={alumni.avatarUrl} alt={alumni.name} data-ai-hint="person photo"/>
          <AvatarFallback>{alumni.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-bold">{alumni.name}</h3>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <GraduationCap className="w-4 h-4" />
            <span>
              {alumni.fieldOfStudy}, {alumni.graduationYear}
            </span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{alumni.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <div className="flex flex-wrap gap-2">
          {alumni.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
