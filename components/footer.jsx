import React from "react";

export default function footer() {
  return (
    <footer className="border-t py-4 text-center text-sm text-muted-foreground ">
      <section>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </section>
    </footer>
  );
}
