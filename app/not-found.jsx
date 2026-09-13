"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import lottie from "lottie-web";
import Link from "next/link";

export default function NotFound() {
  const container = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/notfound.json",
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#060B1C] flex flex-col items-center justify-center px-4">
      <div ref={container} className="w-full max-w-[400px] h-[400px]" />

      <h1 className="text-3xl md:text-4xl text-white font-orbitron font-bold mt-8">
        Page Not Found
      </h1>

      <p className="text-[#858894] text-center mt-4 max-w-[500px] font-spaceGrotesk">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          aria-label="Go back to the home page"
          className="px-8 py-3 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white rounded-lg font-orbitron hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back to the previous page"
          className="px-8 py-3 border border-[#3B82F64D] text-white rounded-lg font-orbitron hover:bg-white/5 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
