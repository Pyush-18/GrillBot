import Link from "next/link";
import React from "react";
import UserButton from "../auth/components/user-button";

function Header() {
  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-8 fixed top-0 z-10 backdrop-blur-xl">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white"
        >
          <path d="M12 2a2 2 0 012 2v6a2 2 0 01-4 0V4a2 2 0 012-2zm-2 10a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 01-2 0v-2a1 1 0 00-2 0v2a1 1 0 001 1zm8-4h-2a1 1 0 000 2h2a1 1 0 000-2zm-8 4h-2a1 1 0 000 2h2a1 1 0 000-2z" />
        </svg>
        <span className="text-2xl font-bold tracking-tight">InterviewAI</span>
      </div>
      <div className="flex items-center space-x-6 md:space-x-8 text-sm font-medium">
        <Link
          href="/"
          className="hover:text-gray-400 transition-colors hidden md:block"
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:text-gray-400 transition-colors hidden md:block"
        >
          About
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-gray-400 transition-colors hidden md:block"
        >
          Dashboard
        </Link>
        <UserButton />
        <Link
          href="#"
          className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-xs md:text-sm"
        >
          Try for Free
        </Link>
      </div>
    </nav>
  );
}

export default Header;
