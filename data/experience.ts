export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Mechlin Technologies",
    role: "Senior Mobile Engineer",
    period: "2025 – Present",
    description:
      "Leading mobile development for enterprise clients, building scalable Flutter applications with complex architectures.",
    highlights: [
      "Architected multi-module Flutter apps",
      "Integrated WebRTC for real-time features",
      "Mentored junior developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    company: "Saini Web Solutions",
    role: "Full-Stack Mobile Developer",
    period: "2022 – 2025",
    description:
      "Built end-to-end mobile solutions from ideation to deployment, managing client relationships and delivering production apps.",
    highlights: [
      "Delivered 15+ production apps",
      "Built custom Laravel APIs",
      "Managed client relationships",
      "Handled Play Store & App Store deployments",
    ],
  },
];
