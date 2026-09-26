import SaveButton from "@/components/workout/SaveButton";
import TodayPlanButton from "@/components/workout/TodayPlanButton";
import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data = await res.json();

  return data;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="mx-auto my-10 w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
        <div className="relative min-h-[600px] overflow-hidden rounded-2xl lg:min-h-0">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-800 bg-[#15171c]">
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Equipment
              </span>

              <span className="text-sm text-slate-200">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Difficulty
              </span>

              <span className="text-sm text-slate-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Sets
              </span>

              <span className="text-sm text-slate-200">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Reps
              </span>

              <span className="text-sm text-slate-200">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FiClock />
                Duration
              </span>

              <span className="text-sm text-slate-200">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FaFire />
                Calories
              </span>

              <span className="text-sm text-slate-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FiStar />
                Rating
              </span>

              <span className="text-sm text-slate-200">{workout.rating}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="font-bold text-lime-400">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <TodayPlanButton workout={workout} />

            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
