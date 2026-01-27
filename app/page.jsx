"use client";

import AdminHeader from "@/components/adminHeader";
import UserListView from "@/components/userListViewSection";
import BuyerRequestView from "@/components/buyerRequestView";
import ProjectView from "@/components/projectView";
import { useSelector } from "react-redux";

export default function Page() {
  const role = "admin";
  const currentPage = useSelector((state) => state.admin.page);
  if (role == "admin") {
    return (
      <div>
        <section className="items-start! flex-col!">
          <AdminHeader />
          {currentPage == "User List" ? (
            <UserListView />
          ) : currentPage == "Buyer Request List" ? (
            <BuyerRequestView />
          ) : (
            <ProjectView />
          )}

          {/* admin Header */}
          {/* user section */}
          {/* project section */}
        </section>
      </div>
    );
  }
  return (
    <div>
      <section></section>
    </div>
  );
}
