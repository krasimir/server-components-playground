'use client';

import { usePathname } from "next/navigation";
import { EXAMPLES } from "../constants";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const example = EXAMPLES.find((example) => example.url === pathname);

  if (!example) {
    return null;
  }
  return (
    <nav>
      <Link href="/">Home</Link> | {example.title}
    </nav>
  )
}