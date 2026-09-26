"use client";

import { WorkoutContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workoutType";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

import { FaFire } from "react-icons/fa";
import { FiClock, FiStar, FiX } from "react-icons/fi";

import { toast } from "react-toastify";

interface PlanWorkoutCardProps {
  workout: IWorkout;

  activeTab: "today" | "saved";
}

const PlanWorkoutCard = ({ workout, activeTab }: PlanWorkoutCardProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { setTodaysPlan, setSavedWorkouts } = context;

  const handleRemove = () => {
    if (activeTab === "today") {
      setTodaysPlan((prev) => {
        return prev.filter((item) => {
          return item.id !== workout.id;
        });
      });

      toast.success(`${workout.name} removed from today's plan`);
    } else {
      setSavedWorkouts((prev) => {
        return prev.filter((item) => {
          return item.id !== workout.id;
        });
      });

      toast.success(`${workout.name} removed from saved`);
    }
  };

  const handleComplete = () => {
    toast.success(`${workout.name} completed!`);
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-[#15171c] p-4 transition-all duration-300 hover:border-slate-600 sm:flex-row sm:items-center">
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl sm:w-36">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, 144px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-black uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-slate-400">{workout.equipment}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <FiClock size={15} className="text-lime-400" />

            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaFire size={14} className="text-lime-400" />

            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FiStar size={15} className="text-lime-400" />

            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <Link
          href={`/works/${workout.id}`}
          className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-white transition hover:border-lime-400 hover:text-lime-400"
        >
          View Details
        </Link>

        {activeTab === "today" && (
          <button
            type="button"
            onClick={handleComplete}
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            <span className="mr-2">✓</span>
            Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="rounded-full p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
