import WorkoutCard from "@/components/workout/WorkoutCard";
import { IWorkout } from "@/types/workoutType";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data;
};

const WorkoutSection = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="mx-auto my-12 w-full max-w-7xl px-4">
      {/* HEADER */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-lime-400">
          Explore
        </p>

        <h2 className="mt-2 text-3xl font-black uppercase text-white md:text-4xl">
          The Library
        </h2>

        <p className="mt-2 text-slate-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutSection;
