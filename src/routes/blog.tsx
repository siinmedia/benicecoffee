import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/blog")({ component: BlogLayout });

function BlogLayout() {
  return <main className="min-h-screen"><Navbar /><Outlet /></main>;
}
