import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { careerMatches } from "@/data/career-matches";

export default function CareerMatches() {
  return (
    <div className="min-h-screen bg-[#845ef7] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-white" />
            <span className="text-white font-bold uppercase tracking-wider">
              Career Matches
            </span>
          </div>
          <h1 className="text-4xl font-bold">Your Top Career Matches</h1>
          <p className="text-gray-100">
            Based on your profile and skills, here are the career paths that
            best align with your expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerMatches.map((career) => (
            <Card
              key={career.title}
              className="bg-[#6f42c1] border-purple-700/50 shadow-sm shadow-black/20"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-white">
                    {career.title}
                  </h2>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-yellow-400">
                      {career.matchPercentage}%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-purple-400 mb-1">
                      {career.requirements.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {career.requirements.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-green-400 mb-1">
                      {career.yourMatch.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {career.yourMatch.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="secondary"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all">
            View your Career Navigator
          </Button>
        </div>
      </div>
    </div>
  );
}
