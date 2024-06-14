"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "@/lib/api";
import { Button, Input, Label, Form, FormGroup } from "@/components/ui";

const loginUser = async (userData) => {
  const { data } = await api.post("/auth/login", userData);
  return data;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const mutation = useMutation(loginUser, {
    onSuccess: () => {
      toast.success("Login successful!");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <Form
      className="w-full max-w-sm p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
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
      <Button type="submit" className="w-full mt-4 btn-primary">
        Login
      </Button>
    </Form>
  );
}
