"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "@/lib/api";
import {
  Button,
  Input,
  Label,
  Form,
  FormGroup,
  Textarea,
} from "@/components/ui";

const createWorkspace = async (workspaceData) => {
  const { data } = await api.post("/workspaces", workspaceData);
  return data;
};

export default function WorkspaceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const mutation = useMutation(createWorkspace, {
    onSuccess: () => {
      toast.success("Workspace created successfully!");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, description });
  };

  return (
    <Form
      className="w-full max-w-sm p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Create Workspace</h2>
      <FormGroup>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit" className="w-full mt-4 btn-primary">
        Create
      </Button>
    </Form>
  );
}
