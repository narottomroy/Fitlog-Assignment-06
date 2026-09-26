"use client";

import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import { WorkoutContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workoutType";

import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { todaysPlan, savedWorkouts } = context;

  const [sortBy, setSortBy] = useState<
    "duration" | "caloriesBurned" | "rating"
  >("duration");

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const sortWorks = (work: IWorkout[]) => {
    const sorted = [...work];

    if (sortBy === "duration") {
      sorted.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "caloriesBurned") {
      sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  };

  const sortedTodaysPlan = sortWorks(todaysPlan);
  const sortedSavedWorkouts = sortWorks(savedWorkouts);

  const currentWorkouts =
    activeTab === "today" ? sortedTodaysPlan : sortedSavedWorkouts;

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce((total, workout) => {
    return total + workout.duration;
  }, 0);

  const totalCalories = currentWorkouts.reduce((total, workout) => {
    return total + workout.caloriesBurned;
  }, 0);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      <div>
        <h1 className="text-3xl font-black uppercase text-white">MY PLAN</h1>

        <p className="mt-2 text-sm text-slate-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-slate-800 bg-[#15171c]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-b border-slate-800 px-6 py-7 md:border-b-0 md:border-r">
            <p className="text-sm text-slate-400">Exercises</p>

            <p className="mt-1 text-4xl font-black text-lime-400">
              {totalExercises}
            </p>
          </div>

          <div className="border-b border-slate-800 px-6 py-7 md:border-b-0 md:border-r">
            <p className="text-sm text-slate-400">Minutes</p>

            <p className="mt-1 text-4xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="px-6 py-7">
            <p className="text-sm text-slate-400">Calories</p>

            <p className="mt-1 text-4xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit rounded-xl border border-slate-800 bg-[#15171c] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              activeTab === "today"
                ? "bg-[#252a32] text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#252a32] text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "duration" | "caloriesBurned" | "rating",
              )
            }
            className="rounded-lg border border-slate-700 bg-[#15171c] px-4 py-2 text-sm text-white outline-none"
          >
            <option value="duration">Duration</option>

            <option value="caloriesBurned">Calories Burned</option>

            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {currentWorkouts.length === 0 ? (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-[#101418]">
            <div className="text-center">
              <h3 className="text-xl font-black uppercase text-white">
                {activeTab === "today"
                  ? "NOTHING HERE TODAY"
                  : "NOTHING SAVED YET"}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {activeTab === "today"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save your favorite workouts and they will appear here."}
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-lime-400 px-7 py-3 text-sm font-bold text-black shadow-lg shadow-lime-400/20 transition hover:bg-lime-300"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          currentWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              activeTab={activeTab}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
