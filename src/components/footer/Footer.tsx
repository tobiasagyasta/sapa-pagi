import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#location" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FDFAE7] px-4 pb-10 pt-8 text-[#43251D] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-[#FDFAE7]/70 py-6 text-center sm:flex-row sm:text-left">
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
          aria-label="Sapa Pagi home"
        >
          <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F6D97D]/75 shadow-sm">
            <Image
              src="/logo/logo.svg"
              alt=""
              width={36}
              height={36}
              className="size-8 object-contain"
            />
          </span>
          <span>
            <span className="block text-sm font-medium tracking-[-0.02em]">
              Sapa Pagi
            </span>
            <span className="mt-1 block text-xs text-[#43251D]/58">
              Cozy mornings, made simple.
            </span>
          </span>
        </Link>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <nav aria-label="Footer navigation" className="flex items-center gap-5">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full text-sm font-medium text-[#43251D]/62 transition-colors hover:text-[#43251D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-[#43251D]/50">
            © {year} Sapa Pagi. All mornings reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
