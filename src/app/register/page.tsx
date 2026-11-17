import RegisterForm from "@/app/register/RegisterForm";
import type { Metadata } from "next";
import Link from "next/link";
import GoogleButton from "../login/GoogleButton";

export const metadata: Metadata = {
  title: "Register | The Apex Club",
  description:
    "Create a new account and join The Apex Club as a driver or administrator.",
};

export default function RegisterPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-xl shadow-lg border border-border">
        <h1 className="text-3xl font-bold text-center">Join The Apex Club</h1>

        <RegisterForm />

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
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
