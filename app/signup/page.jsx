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

const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
  solver: yup.boolean(),
});

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { terms: false, solver: false },
  });

  const terms = useWatch({ control, name: "terms" });
  const solver = useWatch({ control, name: "solver" });

  const onSubmit = (data) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <main className="flex flex-1 items-center justify-center px-4">
        <section>
          <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Create an account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

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

                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-destructive">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setValue("terms", e.target.checked)}
                    className="w-4 h-4 text-primary focus:ring-2 focus:ring-offset-0 rounded"
                  />
                  <Label htmlFor="terms" className="text-xs cursor-pointer">
                    I agree to the Terms & Conditions
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-xs text-destructive">
                    {errors.terms.message}
                  </p>
                )}

                <div className="flex items-center space-x-2">
                  <input
                    id="solver"
                    type="checkbox"
                    checked={solver}
                    onChange={(e) => setValue("solver", e.target.checked)}
                    className="w-4 h-4 text-primary focus:ring-2 focus:ring-offset-0 rounded"
                  />
                  <Label htmlFor="solver" className="text-xs cursor-pointer">
                    Create account as Solver
                  </Label>
                </div>

                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
