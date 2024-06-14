"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to YouTube Editor Collaboration
        </h1>
        <div className="mt-6">
          <Link href="/login">
            <Button className="mx-2 btn-primary">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="mx-2 btn-primary">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
