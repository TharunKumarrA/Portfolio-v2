"use client";
import { useAssetLoading } from "../hooks/useAssetLoading";
import Preloader from "./Preloader";

export const ClientLayout = ({ children }) => {
  const { loading } = useAssetLoading();

  return (
    <>
      {loading && <Preloader />}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
};
