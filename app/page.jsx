"use client";

import AdminHeader from "@/components/adminHeader";
import UserListView from "@/components/userListViewSection";
import BuyerRequestView from "@/components/buyerRequestView";
import ProjectView from "@/components/projectView";
import { useSelector } from "react-redux";
import BuyerDashboard from "@/components/buyerDashbord";
export default function Page() {
  const role = "buyer";
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

  if (role == "buyer") {
    return (
      <div>
        <section className="items-start! flex-col!">
          <BuyerDashboard />
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
