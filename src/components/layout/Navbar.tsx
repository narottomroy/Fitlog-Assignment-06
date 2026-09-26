"use client";

import Logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const Navbar = () => {
  const context = useContext(WorkoutContext);

  const [activeLink, setActiveLink] = useState("workout");

  if (!context) {
    return null;
  }

  const { todaysPlan, savedWorkouts } = context;

  return (
    <div className="border-b border-[#191c21] bg-[#0b0d0f] px-4 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box border border-slate-800 bg-[#15171c] p-2 shadow-xl"
            >
              <li>
                <Link
                  href="/"
                  onClick={() => setActiveLink("workout")}
                  className={
                    activeLink === "workout"
                      ? "bg-[#18220e] text-[#ccff00]"
                      : "text-slate-400"
                  }
                >
                  Workout
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  onClick={() => setActiveLink("my-plan")}
                  className={
                    activeLink === "my-plan"
                      ? "bg-[#18220e] text-[#ccff00]"
                      : "text-slate-400"
                  }
                >
                  My Plan
                </Link>
              </li>

              <div className="my-1 border-t border-slate-800" />

              <li>
                <Link
                  href="/my-plan"
                  className="flex justify-between text-slate-400"
                >
                  <span>Plan</span>

                  <span className="rounded-full bg-[#ccff00] px-2 py-0.5 text-xs font-black text-black">
                    {todaysPlan.length}
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="flex justify-between text-slate-400"
                >
                  <span>Saved</span>

                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                    {savedWorkouts.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="ml-1">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="FitLog" width={35} height={18} priority />

              <h1 className="text-xl font-bold text-white">FITLOG</h1>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            <li>
              <Link
                href="/"
                onClick={() => setActiveLink("workout")}
                className={
                  activeLink === "workout"
                    ? "rounded-full bg-[#18220e] text-[#ccff00]"
                    : "rounded-full text-slate-500 hover:text-white"
                }
              >
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                onClick={() => setActiveLink("my-plan")}
                className={
                  activeLink === "my-plan"
                    ? "rounded-full bg-[#18220e] text-[#ccff00]"
                    : "rounded-full text-slate-500 hover:text-white"
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-xs text-slate-400"
            >
              <span>Plan</span>

              <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black text-black">
                {todaysPlan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex"
            >
              <span>Saved</span>

              <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-slate-700 px-1 text-[9px] text-slate-400">
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
