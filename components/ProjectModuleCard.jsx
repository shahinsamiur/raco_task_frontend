"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectModuleCard({
  title,
  description,
  deadline,
  status,
}) {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>

        {/* Timeline / Deadline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>

          <Badge
            variant={
              status === "completed"
                ? "success"
                : status === "inProgress"
                  ? "secondary"
                  : "outline"
            }
            className="capitalize"
          >
            {status}
          </Badge>
        </div>

        {/* Actions (optional) */}
        <div className="flex justify-end gap-2 pt-2">
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm">View Files</Button>
        </div>
      </CardContent>
    </Card>
  );
}
