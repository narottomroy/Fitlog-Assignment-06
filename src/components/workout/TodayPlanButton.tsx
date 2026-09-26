"use client";

import { WorkoutContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workoutType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface TodayPlanButtonProps {
  workout: IWorkout;
}

const TodayPlanButton = ({ workout }: TodayPlanButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { todaysPlan, setTodaysPlan } = context;

  const handleTodayPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info("This workout is already in today's plan");
      return;
    }

    setTodaysPlan((prev) => {
      return [...prev, workout];
    });

    toast.success(`${workout.name} added to today's plan`);
  };

  return (
    <button
      type="button"
      onClick={handleTodayPlan}
      className="rounded-lg bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
    >
      Add to Todays Plan
    </button>
  );
};

export default TodayPlanButton;
