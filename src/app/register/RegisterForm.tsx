"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const passwordValue = watch("password", "");

  const passwordChecks = [
    { label: "At least 8 characters", valid: passwordValue.length >= 8 },
    { label: "One uppercase letter (A-Z)", valid: /[A-Z]/.test(passwordValue) },
    { label: "One lowercase letter (a-z)", valid: /[a-z]/.test(passwordValue) },
    { label: "One number (0-9)", valid: /\d/.test(passwordValue) },
  ];

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setError(result.error || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && <p className="text-destructive text-sm text-center">{error}</p>}

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="e.g. Abdullah Sawan"
          className="bg-background border-border text-foreground"
          {...register("name", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
            pattern: {
              value: /^[a-zA-Z\u0600-\u06FF\s]+$/,
              message: "Name should contain letters and spaces only",
            },
          })}
        />
        {errors.name && (
          <p className="text-destructive text-xs">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          className="bg-background border-border text-foreground"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email format (e.g. user@domain.com)",
            },
          })}
        />
        {errors.email && (
          <p className="text-destructive text-xs">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="bg-background border-border text-foreground pr-10"
            {...register("password", {
              required: "Password is required",
              validate: {
                minLength: (v) =>
                  v.length >= 8 || "Password must be at least 8 characters",
                hasUpper: (v) =>
                  /[A-Z]/.test(v) ||
                  "Must include at least one uppercase letter",
                hasLower: (v) =>
                  /[a-z]/.test(v) ||
                  "Must include at least one lowercase letter",
                hasNumber: (v) =>
                  /\d/.test(v) || "Must include at least one number",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>

        {passwordValue.length > 0 && (
          <ul className="space-y-1 pt-1">
            {passwordChecks.map((rule) => (
              <li
                key={rule.label}
                className={`flex items-center gap-1.5 text-xs ${
                  rule.valid ? "text-emerald-500" : "text-muted-foreground"
                }`}
              >
                {rule.valid ? (
                  <Check className="size-3.5 shrink-0" />
                ) : (
                  <X className="size-3.5 shrink-0 text-destructive" />
                )}
                <span>{rule.label}</span>
              </li>
            ))}
          </ul>
        )}

        {errors.password && passwordValue.length === 0 && (
          <p className="text-destructive text-xs">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creating account..." : "Register"}
      </Button>
    </form>
  );
}
