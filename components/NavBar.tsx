'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-end w-full h-[108px] base-text gap-5 py-5 text-primary">
      <Link href="/" className={`hover:underline text-primary ${pathname === '/' ? 'font-bold' : ''}`}>
        Projects
      </Link>
      <Link href="/contact" className={`hover:underline text-primary ${pathname === '/contact' ? 'font-bold' : ''}`}>
        Contact
      </Link>
    </div>
  );
};