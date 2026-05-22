import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full py-6 px-16 flex items-center justify-between">
      <div className="font-heading text-2xl font-bold">JJ</div>
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="#about"
            className="text-foreground hover:text-primary transition"
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
