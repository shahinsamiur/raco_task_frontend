"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  // 🔐 TEMP auth state (replace later)
  const isAuthenticated = false;

  const renderAuthAction = () => {
    if (isAuthenticated) {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => {
            // logout logic later
            console.log("Logout");
          }}
        >
          Logout
        </Button>
      );
    }

    if (pathname === "/signin") {
      return (
        <Link href="/signup">
          <Button variant="ghost" className="cursor-pointer">
            Signup
          </Button>
        </Link>
      );
    }

    if (pathname === "/signup") {
      return (
        <Link href="/signin">
          <Button variant="ghost" className="cursor-pointer">
            Login
          </Button>
        </Link>
      );
    }

    // default
    return (
      <Link href="/signin">
        <Button variant="ghost" className="cursor-pointer">
          Login
        </Button>
      </Link>
    );
  };

  return (
    <header className="w-full border-b">
      <section className="justify-between!">
        <h1 className="text-xl font-semibold">MyApp</h1>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            disabled={!resolvedTheme}
            className="cursor-pointer"
          >
            {resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : resolvedTheme === "light" ? (
              <Moon size={18} />
            ) : (
              <span className="h-4 w-4" />
            )}
          </Button>

          {/* Auth action */}
          {renderAuthAction()}
        </div>
      </section>
    </header>
  );
}
