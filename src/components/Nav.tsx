"use client";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-6 px-16 flex items-center justify-between bg-background/40 backdrop-blur-md">
      <div className="font-heading text-2xl font-bold">
        <ul>
          <li>
            <a
              href="/"
              className="text-foreground hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("home");
              }}
            >
              JJ
            </a>
          </li>
        </ul>
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="#about"
            className="text-foreground hover:text-primary transition"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#teaching"
            className="text-foreground hover:text-primary transition"
          >
            Teaching
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition"
          >
            Contact
          </a>
        </li>
        <li>
          <Link
            href="/resume"
            className="text-foreground hover:text-primary transition"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            className="text-foreground hover:text-primary transition"
          >
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
