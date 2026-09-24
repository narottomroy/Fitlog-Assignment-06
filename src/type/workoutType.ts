export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: ["Chest", "Arms"];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
