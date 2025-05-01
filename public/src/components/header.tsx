"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center items-center py-8 bg-[#252b31] w-full">
      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/app-sneak-logo.png"
          alt="AppSneak Logo"
          width={100}
          height={100}
          className="mb-2"
        />
        <h1 className="text-white text-4xl font-black">AppSneak</h1>
      </Link>
    </header>
  );
}
