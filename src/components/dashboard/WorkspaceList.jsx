"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function WorkspaceList({ workspaces }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Workspaces</h2>
        <Link href="/dashboard/create-workspace">
          <Button className="btn-primary">Create Workspace</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workspaces.map((workspace) => (
          <Card key={workspace._id} className="shadow-md">
            <div>
              <h3 className="text-xl font-bold">{workspace.title}</h3>
              <p>{workspace.description}</p>
              <Link href={`/dashboard/workspace/${workspace._id}`}>
                <Button variant="link">Open Workspace</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
