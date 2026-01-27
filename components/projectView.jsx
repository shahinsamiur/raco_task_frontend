"use client";
import ProjectCard from "./projectCard";

export default function ProjectView() {
  const projects = [
    {
      title: "Build Landing Page",
      description:
        "Create a responsive landing page for the new product launch.",
      createdAt: "2026-01-25",
      status: "inProgress",
    },
    {
      title: "API Integration",
      description: "Integrate backend APIs with frontend React components.",
      createdAt: "2026-01-20",
      status: "pending",
    },
    {
      title: "User Dashboard",
      description: "Develop user dashboard with charts and analytics.",
      createdAt: "2026-01-15",
      status: "completed",
    },
  ];

  return (
    <div className="space-y-4 w-full py-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
