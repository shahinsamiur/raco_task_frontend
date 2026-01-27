"use client";

import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import ProjectCard from "./projectCard";
import CreateProjectModal from "./CreateProjectModal";

export default function BuyerDashbord() {
  const role = useSelector((state) => state.user.role);

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

  /* 🚫 No role */
  if (!role) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-2xl sm:text-4xl text-muted-foreground">
            You are not permitted to create projects.
            <br />
            Please request access from admin.
          </h1>

          <Button>REQUEST NOW</Button>
        </section>
      </div>
    );
  }

  /* 📭 Buyer but no projects */
  if (role === "buyer" && projects.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-2xl sm:text-4xl text-muted-foreground">
            You don’t have any projects yet.
          </h1>

          <CreateProjectModal />
        </section>
      </div>
    );
  }

  /* 📦 Buyer with projects */
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col justify-end! items-end! w-full sm:flex-row sm:items-end sm:justify-end gap-4">
          <CreateProjectModal />
        </div>

        {/* Project list */}
        <div className="space-y-4 w-full py-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              createdAt={project.createdAt}
              status={project.status}
              href="/projectView/1"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
