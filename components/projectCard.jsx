"use client";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { FileText, Calendar } from "lucide-react";
import Link from "next/link";
export default function ProjectCard({
  title,
  description,
  createdAt,
  status,
  href = "/",
}) {
  // Status styles
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    inProgress: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div>
      <Link href={href}>
        <Card className="w-full hover:shadow-lg transition-shadow duration-200">
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left section: icon + title/description */}
            <div className="flex items-start sm:items-center gap-3 flex-1 w-full">
              <div className="bg-primary-100 text-primary-700 rounded-full p-3 flex items-center justify-center shrink-0">
                <FileText size={28} />
              </div>

              <div className="flex flex-col w-full sm:w-2/3">
                <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {description}
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                  <Calendar size={14} />
                  <span>{createdAt}</span>
                </div>
              </div>
            </div>

            {/* Right section: status + actions */}
            <div className="flex items-center gap-2 mt-3 sm:mt-0 flex-wrap sm:flex-nowrap">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-medium ${statusStyles[status]}`}
              >
                {status}
              </span>
              {/* <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            Delete
          </Button> */}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
