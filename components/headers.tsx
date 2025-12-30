"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <Wrench className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Solo Motor</h1>
            <p className="text-xs text-muted-foreground">
              Bengkel Sepeda Motor
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-gray-400">
            Tentang Kami
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-gray-400">
            Layanan
          </Link>
          <Link href="#reviews" className="text-sm font-medium hover:text-gray-400">
            Ulasan
          </Link>
          <Link href="#location" className="text-sm font-medium hover:text-gray-400">
            Lokasi
          </Link>
          <Button size="sm" asChild>
            <Link href="#contact">Hubungi Kami</Link>
          </Button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link onClick={() => setOpen(false)} href="#about">
              Tentang Kami
            </Link>
            <Link onClick={() => setOpen(false)} href="#services">
              Layanan
            </Link>
            <Link onClick={() => setOpen(false)} href="#reviews">
              Ulasan
            </Link>
            <Link onClick={() => setOpen(false)} href="#location">
              Lokasi
            </Link>

            <Button size="sm" asChild className="mt-2">
              <Link onClick={() => setOpen(false)} href="#contact">
                Hubungi Kami
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
