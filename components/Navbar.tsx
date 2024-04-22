import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current) {
      setDrawerHeight(isMobileMenuOpen ? drawerRef.current.scrollHeight : 0);
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/">
          <div className="text-lg font-bold">COMING SOON</div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* 모바일 drawer */}
        <div
          ref={drawerRef}
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-10 p-6 inset-x-0 bg-blue-800 text-white overflow-hidden transition-height duration-300 ease-in-out z-100`}
          style={{
            height: `${drawerHeight}px`,
          }}
        >
          <div className="flex flex-col mt-2 space-y-8">
            <Link href="#" className="hover:text-gray-300">
              ABOUT
            </Link>
            <Link href="/members" className="hover:text-gray-300">
              MEMBER
            </Link>
            <Link href="/track" className="hover:text-gray-300">
              TRACK
            </Link>
            <Link href="/activity" className="hover:text-gray-300">
              ACTIVITY
            </Link>
            <Link href="#" className="hover:text-gray-300">
              PROJECT
            </Link>
            <Link href="#" className="hover:text-gray-300">
              RECRUIT
            </Link>
          </div>
        </div>
        {/* 데스크탑 화면에서 네비게이션 링크들 */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="hover:text-gray-300">
            ABOUT
          </Link>
          <Link href="/members" className="hover:text-gray-300">
            MEMBER
          </Link>
          <Link href="/track" className="hover:text-gray-300">
            TRACK
          </Link>
          <Link href="/activity" className="hover:text-gray-300">
            ACTIVITY
          </Link>
          <Link href="#" className="hover:text-gray-300">
            PROJECT
          </Link>
          <Link href="#" className="hover:text-gray-300">
            RECRUIT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
