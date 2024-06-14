"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/api";
import WorkspaceDetails from "@/components/dashboard/WorkspaceDetails";
import { useToast } from "react-toastify";

const fetchWorkspace = async (id) => {
  const { data } = await axios.get(`/api/workspaces/${id}`);
  return data;
};

export default function WorkspacePage() {
  const router = useRouter();
  const { id } = router.query;
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (id) {
      fetchWorkspace(id)
        .then((data) => {
          setWorkspace(data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <WorkspaceDetails workspace={workspace} />
    </div>
  );
}
