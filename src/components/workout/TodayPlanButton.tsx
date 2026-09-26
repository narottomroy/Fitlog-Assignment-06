"use client";

import { WorkoutContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workoutType";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
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

  const handleAddToPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info(`${workout.name} is already in today's plan.`);
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.warning("You can add maximum 5 workouts for today.");
      return;
    }

    setTodaysPlan((prev) => [...prev, workout]);

    toast.success(`${workout.name} added to today's plan.`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
    >
      <FiCalendar size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default TodayPlanButton;
