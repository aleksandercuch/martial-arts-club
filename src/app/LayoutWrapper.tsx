"use client"; // THIS IS CLIENT COMPONENT

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded } = useLanguage();

  if (!isLoaded) return <Loader />;

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
