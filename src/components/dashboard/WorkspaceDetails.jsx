"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "@/lib/api";

import { useToast } from "react-toastify";
import { Button, Input, Label, Form, FormGroup } from "@/components/ui";

const connectYouTube = async (workspaceId) => {
  const { data } = await axios.post(
    `/api/workspaces/${workspaceId}/youtube/connect`
  );
  return data;
};

const inviteUsers = async ({ workspaceId, users }) => {
  const { data } = await axios.post(`/api/workspaces/${workspaceId}/invite`, {
    users,
  });
  return data;
};

export default function WorkspaceDetails({ workspace }) {
  const router = useRouter();
  const toast = useToast();
  const [search, setSearch] = useState("");

  const handleConnectYouTube = () => {
    connectYouTube(workspace._id)
      .then(() => {
        toast.success("Connected to YouTube successfully!");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "An error occurred");
      });
  };

  const handleInviteUsers = (users) => {
    inviteUsers({ workspaceId: workspace._id, users })
      .then(() => {
        toast.success("Users invited successfully!");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:underline mb-4"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{workspace.title}</h2>
      <p className="mb-4">{workspace.description}</p>
      <div className="mb-4">
        <Button onClick={handleConnectYouTube} className="btn-primary">
          Connect to YouTube
        </Button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Invite Users</h3>
        <Form>
          <FormGroup>
            <Label htmlFor="search">Search users</Label>
            <Input
              type="text"
              id="search"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-2"
            />
          </FormGroup>
          <Button
            onClick={() => handleInviteUsers([search])}
            className="btn-primary"
          >
            Invite Selected Users
          </Button>
        </Form>
      </div>
    </div>
  );
}
