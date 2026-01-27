"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ProjectProposals from "../../../components/projectProposals";
import ProjectModule from "../../../components/projectModule";
export default function ProjectViewPage() {
  const project = {
    title: "Build Landing Page",
    description:
      "Create a responsive landing page for the new product launch. Include hero section, features, and responsive design.",
    createdAt: "2026-01-25",
    status: "assigned",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "inProgress":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground">
            Posted on: {new Date(project.createdAt).toLocaleDateString()} |
            Status:{" "}
            <span className={`${getStatusColor(project.status)} font-semibold`}>
              {project.status}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg">{project.description}</p>
        </CardContent>
      </Card>

      {project.status === "assigned" && (
        <div className="space-y-4">
          <ProjectModule />
        </div>
      )}

      {project.status === "inProgress" && (
        <div className="space-y-4">
          <ProjectProposals />
        </div>
      )}
    </div>
  );
}
