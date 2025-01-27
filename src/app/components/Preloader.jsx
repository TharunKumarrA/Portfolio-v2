import { useEffect } from "react";

const Grid = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
      {[...Array(24)].map((_, index) => (
        <div
          key={index}
          className="border-text/20 border-[0.5px] h-full w-full"
        />
      ))}
    </div>
  );
};

export default function Preloader({ setLoading }) {
  useEffect(() => {
    const handleAssetsLoaded = () => setLoading(false);
    window.addEventListener("load", handleAssetsLoaded);
    return () => window.removeEventListener("load", handleAssetsLoaded);
  }, [setLoading]);

  return (
    <main className="fixed inset-0 bg-background overflow-hidden z-50">
      <div className="absolute inset-0">
        <Grid />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <div className="absolute top-[36%] bottom-[50%] loader mb-4" />
        <p className="font-heading text-h3 md:text-h1 text-text">Loading</p>
      </div>

      <style jsx>{`
        .loader {
          border: 4px solid currentColor;
          border-top: 4px solid transparent;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
