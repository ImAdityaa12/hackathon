import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { careerMatches } from "@/data/career-matches";
import { cn } from "@/lib/utils";

export function JobModal({
  details,
}: {
  details: (typeof careerMatches)[0]["details"];
}) {
  const getCareerLevel = (growth: number) => {
    switch (growth) {
      case 1:
        return "Entry Level";
      case 2:
        return "Mid Level";
      case 3:
        return "Senior Level";
      default:
        return "Unknown";
    }
  };
  const loop = [1, 2, 3];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all"
        >
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Job Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Recent Job Listings</h3>
            <ul className="space-y-2">
              {details.job_listings.map((job, index) => (
                <li key={index} className="text-sm">
                  <a
                    href={job.jobLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {job.time} - {job.company} - {job.location} - {job.salary}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {details.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Career Growth</h3>
            <div className="grid grid-cols-3 gap-2">
              {loop.map((_, index) => (
                <div>
                  <div
                    className={cn(
                      "h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700",
                      details.career_growth >= index + 1
                        ? "bg-gradient-to-r from-purple-600 to-pink-500"
                        : ""
                    )}
                  />
                  <Badge
                    key={index}
                    variant="secondary"
                    className="w-full flex items-center justify-center mt-2"
                  >
                    {getCareerLevel(index + 1)}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
