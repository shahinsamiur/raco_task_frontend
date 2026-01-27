import ProjectModuleCard from "./ProjectModuleCard";

export default function ProjectModule() {
  const modules = {
    title: "Design UI Components",
    description:
      "Create UI components for the new dashboard including buttons, form inputs, and modals.",
    deadline: "2026-02-05",
    status: "inProgress",
  };

  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-semibold">modules</h2>
      <ProjectModuleCard {...modules} />
    </div>
  );
}
