"use client";
import { Button } from "./ui/button";
import { Card } from "@/components/ui/card";
import { useSelector, useDispatch } from "react-redux";
import { navigateAdminPage } from "@/store/slices/adminDashboard";

export default function AdminHeader() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.admin.page);

  const buttons = ["User List", "Buyer Request List", "Project List"];

  return (
    <Card className="w-full py-2">
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-1 px-2 ">
        {buttons.map((btn) => (
          <Button
            key={btn}
            variant={currentPage === btn ? "default" : "ghost"}
            className="flex-1 cursor-pointer"
            onClick={() => dispatch(navigateAdminPage(btn))}
          >
            {btn}
          </Button>
        ))}
      </div>
    </Card>
  );
}
