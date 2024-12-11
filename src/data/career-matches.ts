interface CareerMatch {
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
  },
];
