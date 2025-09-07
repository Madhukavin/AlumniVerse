import type { Job } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Building2, MapPin } from "lucide-react";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {job.company}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{job.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="h-6 w-6">
            <AvatarImage src={job.avatarUrl} alt={job.postedBy} data-ai-hint="person photo"/>
            <AvatarFallback>{job.postedBy.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>Posted by {job.postedBy}</span>
        </div>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
}
