"use client";

import { createContext, useState, type ReactNode } from "react";

import { IWorkout } from "@/types/workoutType";

interface WorkoutContextType {
  todaysPlan: IWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  savedWorkouts: IWorkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);

  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const shareData = {
    todaysPlan,
    setTodaysPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
