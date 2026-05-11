"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/inventory", label: "Inventory" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/tax-calculator", label: "Tax Calculator" },
];

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`hidden lg:flex items-center gap-8 ${className}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link text-md font-thin transition-all border-b-2 py-1 ${
              pathname === item.href
                ? "text-[#86e2b4] border-[#86e2b4]"
                : "text-white border-transparent hover:text-[#86e2b4]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-light ${
              pathname === item.href ? "text-red-active" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="!block sm:!hidden">
          <Button>Get In Touch</Button>
        </Link>
      </div>
    </>
  );
}
