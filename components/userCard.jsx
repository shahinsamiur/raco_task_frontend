"use client";
import { User, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UserCard({ name, email, role }) {
  const roleStyles = {
    admin: "bg-red-100 text-red-700",
    buyer: "bg-blue-100 text-blue-700",
    solver: "bg-green-100 text-green-700",
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3 flex-1 w-full">
          <div className="bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded-full p-3 flex items-center justify-center shrink-0">
            <User size={28} />
          </div>

          <div className="flex flex-col w-full sm:w-2/3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-medium ${roleStyles[role]}`}
                >
                  {role}
                </span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 wrap-break-word">
                <Mail size={14} />
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 sm:mt-0 flex-wrap sm:flex-nowrap">
          <Button variant="outline" size="sm" className="cursor-pointer">
            Edit
          </Button>
          <Button variant="destructive" size="sm" className="cursor-pointer">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
