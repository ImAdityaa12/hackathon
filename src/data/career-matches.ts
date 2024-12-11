export interface job {
  time: string;
  company: string;
  location: string;
  salary: string;
  jobLink: string;
}
export interface CareerMatch {
  title: string;
  matchPercentage: number;
  requirements: {
    title: string;
    description: string;
  };
  yourMatch: {
    title: string;
    description: string;
  };
  details: {
    job_listings: job[];
    skills: string[];
    career_growth: number;
  };
}

export const careerMatches: CareerMatch[] = [
  {
    title: "Data Scientist",
    matchPercentage: 92,
    requirements: {
      title: "Requirements",
      description:
        "Expertise in data-oriented programming, visualization, and machine learning application.",
    },
    yourMatch: {
      title: "Your Match",
      description:
        "Skills in Python, ReactJS, ArcGIS, and data visualization projects.",
    },
    details: {
      job_listings: [
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
      ],
      skills: ["Python", "ReactJS", "ArcGIS", "Data Visualization"],
      career_growth: 1,
    },
  },
  {
    title: "AI Research Scientist",
    matchPercentage: 85,
    requirements: {
      title: "Requirements",
      description:
        "Advanced use of AI tools for creating realistic digital personas and conducting AI workshops.",
    },
    yourMatch: {
      title: "Your Match",
      description:
        "Experience with generative AI, AI-driven speech projects, and teaching complex AI concepts.",
    },
    details: {
      job_listings: [
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
      ],
      skills: ["Python", "ReactJS", "ArcGIS", "Data Visualization"],
      career_growth: 1,
    },
  },
  {
    title: "Business Intelligence Analyst",
    matchPercentage: 90,
    requirements: {
      title: "Requirements",
      description:
        "Ability to analyze business data and present actionable intelligence.",
    },
    yourMatch: {
      title: "Your Match",
      description:
        "Experience in dynamic data visualization and simplification of complex data for presentations.",
    },
    details: {
      job_listings: [
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
      ],
      skills: ["Python", "ReactJS", "ArcGIS", "Data Visualization"],
      career_growth: 1,
    },
  },
  {
    title: "Systems Analyst",
    matchPercentage: 78,
    requirements: {
      title: "Requirements",
      description:
        "Skills in software development, database management, and technology integration.",
    },
    yourMatch: {
      title: "Your Match",
      description:
        "Development of backend systems using various APIs and integration of complex software solutions.",
    },
    details: {
      job_listings: [
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
      ],
      skills: ["Python", "ReactJS", "ArcGIS", "Data Visualization"],
      career_growth: 1,
    },
  },
  {
    title: "Project Manager",
    matchPercentage: 83,
    requirements: {
      title: "Requirements",
      description:
        "Leadership in managing tech projects and optimizing team workflows.",
    },
    yourMatch: {
      title: "Your Match",
      description:
        "Managed AI-driven project implementations and coordinated with educational staff for system integration.",
    },
    details: {
      job_listings: [
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
        {
          time: "5 hours ago",
          company: "XYZ Company",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          jobLink: "https://www.job.com/job/654321",
        },
      ],
      skills: ["Python", "ReactJS", "ArcGIS", "Data Visualization"],
      career_growth: 1,
    },
  },
];
