import LoginForm from "@/app/login/LoginForm";
import type { Metadata } from "next";
import Link from "next/link";
import GoogleButton from "./GoogleButton";

export const metadata: Metadata = {
  title: "Login | The Apex Club",
  description:
    "Sign in to your account to manage your rides and access The Apex Club services.",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-xl shadow-lg border border-border">
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

        <LoginForm />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <GoogleButton />

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
