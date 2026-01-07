"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";

export default function HeaderNoMenu() {


  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Wrench className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ramah Motor </h1>
              <p className="text-xs text-muted-foreground">
                Bengkel Sepeda Motor
              </p>
            </div>
          </div>
        </Link>
        {/* DESKTOP NAV */}

      </div>


    </header>
  );
}
