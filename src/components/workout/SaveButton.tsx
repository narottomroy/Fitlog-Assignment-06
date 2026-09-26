"use client";

import { WorkoutContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workoutType";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

interface SaveButtonProps {
  workout: IWorkout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { savedWorkouts, setSavedWorkouts } = context;

  const handleSave = () => {
    const alreadySaved = savedWorkouts.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info(`${workout.name} is already saved.`);
      return;
    }

    setSavedWorkouts((prev) => [...prev, workout]);

    toast.success(`${workout.name} saved for later.`);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
    >
      <FiBookmark size={18} />
      Save for later
    </button>
  );
};

export default SaveButton;
