"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsers(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // hapus storage
    setUsers(null);                  // 🔥 trigger re-render
    setOpen(false);                  // tutup mobile menu
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <Wrench className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Rahmat Motor | Bengkel Motor Terpercaya di Sepatan Timur</h1>
            <p className="text-xs text-muted-foreground">
              Bengkel Sepeda Motor
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about">Tentang Kami</Link>
          <Link href="#services">Layanan</Link>
          <Link href="#reviews">Ulasan</Link>
          <Link href="#location">Lokasi</Link>

          <Button size="sm" asChild>
            <Link href="#contact">Hubungi Kami</Link>
          </Button>

          {users?.name === "rahmat" && (
            <Button
              size="sm"
              onClick={handleLogout}
              className="bg-orange-600 text-white hover:bg-orange-700"
            >
              Log Out
            </Button>
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-border"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link onClick={() => setOpen(false)} href="#about">Tentang Kami</Link>
            <Link onClick={() => setOpen(false)} href="#services">Layanan</Link>
            <Link onClick={() => setOpen(false)} href="#reviews">Ulasan</Link>
            <Link onClick={() => setOpen(false)} href="#location">Lokasi</Link>

            <Button size="sm" asChild>
              <Link onClick={() => setOpen(false)} href="#contact">
                Hubungi Kami
              </Link>
            </Button>

            {users?.name === "rahmat" && (
              <Button
                size="sm"
                onClick={handleLogout}
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                Log Out
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
