import React from "react";
import DashboardHero from "../Components/DashboardHero";

const AdminHome = () => {
  return (
    <DashboardHero
      title="Admin Dashboard"
      subtitle="Manage categories and keep  Budget Tracker organized for every user."
      actions={[
        {
          title: "Categories Management",
          description: "Create, edit and remove categories for the whole system.",
          to: "/admin/categories",
        },
        {
          title: "Metrics",
          description: "Charts and simple statistics for the whole system.",
          to: "/admin/metrics",
        }
        
      ]}
      images={[
        {
          src: "/image1.png",
          badge: "Savings.",
          caption: "Build better habits.",
          alt: " Budget Tracker image 1",
        },
        {
          src: "/image2.png",
          badge: "Control.",
          caption: "Stay consistent.",
          alt: " Budget Tracker image 2",
        },
      ]}
      tipText="Tip: Keep categories consistent so users can track budgets and transactions easily."
    />
  );
};

export default AdminHome;
