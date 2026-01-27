"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  isAdmin: yup.boolean(),
});

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      isAdmin: false,
    },
  });

  // ✅ Safe way to watch a single field
  const isAdmin = useWatch({ control, name: "isAdmin" });

  const onSubmit = (data) => {
    console.log("Signin data:", data);
    // Example: { email, password, isAdmin: true/false }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen items-center justify-center px-4">
      <main className="flex flex-1 items-center justify-center w-full">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Sign In To Your Account
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Admin Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isAdmin"
                  checked={isAdmin}
                  onCheckedChange={(value) =>
                    setValue("isAdmin", Boolean(value))
                  }
                />
                <Label htmlFor="isAdmin" className="text-xs cursor-pointer">
                  Login as Admin
                </Label>
              </div>

              {/* Submit */}
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Please Wait..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
