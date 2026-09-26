"use client";

import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="border-b border-slate-800 bg-black">
      <div className="navbar mx-auto w-full max-w-7xl px-4">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="FitLog logo"
              width={38}
              height={38}
              priority
            />

            <span className="text-xl font-black uppercase text-white">
              FitLog
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-lg px-5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-lime-400"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className="rounded-lg px-5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-lime-400"
            >
              My Plan
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost text-white"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-slate-700 bg-[#15171c] p-2 shadow-xl"
            >
              <li>
                <Link href="/">Workout</Link>
              </li>

              <li>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
