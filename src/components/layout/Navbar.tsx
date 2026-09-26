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
    <nav className="border-b border-[#191c21] bg-[#0b0d0f] py-2">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/">
          <div className="flex justify-center items-center gap-4">
            <Image src={Logo} alt="FitLog" width={35} height={18} priority />
            <h1 className="text-2xl font-bold">FITLOG</h1>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/"
            onClick={() => setActiveLink("workout")}
            className={`rounded-full px-4 py-2 text-[11px] font-semibold transition ${
              activeLink === "workout"
                ? "bg-[#18220e] text-[#ccff00]"
                : "text-slate-500 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setActiveLink("my-plan")}
            className={`rounded-full px-4 py-2 text-[11px] font-semibold transition ${
              activeLink === "my-plan"
                ? "bg-[#18220e] text-[#ccff00]"
                : "text-slate-500 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[11px] text-slate-400"
          >
            <span>Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black text-black">
              {todaysPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[11px] text-slate-400"
          >
            <span>Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#30343a] px-1 text-[9px] font-semibold text-slate-400">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
