import Footer from "@/modules/home/footer";
import Header from "@/modules/home/header";
import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans flex flex-col items-center justify-between relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
