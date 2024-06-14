"use client";
import { useGetUsers } from "@/hooks/useUsers";
import WorkspaceList from "@/components/dashboard/WorkspaceList";
import { useToast } from "react-toastify";

export default function Dashboard() {
  const { data: users, error, isLoading } = useGetUsers();
  const toast = useToast();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    toast.error(error.message);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <WorkspaceList workspaces={users} />
    </div>
  );
}
