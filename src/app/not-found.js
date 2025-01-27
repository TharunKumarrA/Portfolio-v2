import Link from "next/link";
import React from "react";

const Grid = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="border-text/20 border-[0.5px] h-full w-full"
          />
        ))}
      </div>
    </div>
  );
};

const Custom404 = () => {
  return (
    <main className="h-screen w-screen bg-primary overflow-hidden relative">
      <div className="absolute inset-0">
        <Grid />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="font-heading text-6xl md:text-8xl mb-4">404</h1>
        <p className="font-body text-xl md:text-2xl mb-8">Page Not Found</p>
        <Link
          href="/"
          className="font-body text-lg border-2 border-text px-6 py-3 hover:bg-text hover:text-primary transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default Custom404;
