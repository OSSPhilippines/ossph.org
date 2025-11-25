import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[var(--ossph-primary)] flex flex-col items-center justify-center text-white text-center p-4">
      <Image
        src="/images/ossph-logo.png"
        alt="OSSPH Logo"
        width={200}
        height={70}
        className="mb-8 brightness-0 invert"
      />
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h4 className="text-2xl mb-8">Nothing to see here 👀</h4>
      <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
