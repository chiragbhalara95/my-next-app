import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SponsorHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-300 to-violet-500 text-sm py-1 px-4 text-black flex justify-center items-center gap-2">
      <span>Sponsored by</span>
      <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-semibold">Nume</span>
      <span> - AI CFO for founders, providing financial insights and automation.</span>
      <Link href="https://nume.com" className="ml-2 hover:opacity-80 transition">
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
