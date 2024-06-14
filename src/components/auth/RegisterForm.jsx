"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "@/lib/api";
import { Button, Input, Label, Form, FormGroup } from "@/components/ui";

const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Youtuber");
  const router = useRouter();
  const mutation = useMutation(registerUser, {
    onSuccess: () => {
      toast.success("Registration successful!");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email, password, role });
  };

  return (
    <Form
      className="w-full max-w-sm p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="role">Role</Label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
        >
          <option value="Youtuber">Youtuber</option>
          <option value="Manager">Manager</option>
          <option value="Editor">Editor</option>
        </select>
      </FormGroup>
      <Button type="submit" className="w-full mt-4 btn-primary">
        Register
      </Button>
    </Form>
  );
}
