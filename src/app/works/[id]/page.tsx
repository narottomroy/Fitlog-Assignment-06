import { IWorkout } from "@/type/workoutType";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { FiBookmark, FiCalendar, FiClock, FiStar } from "react-icons/fi";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data = await res.json();

  return data;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="mx-auto my-10 w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative min-h-[700px] overflow-hidden rounded-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-4xl font-black uppercase tracking-tight text-white">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base leading-6 text-slate-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
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

          {/* ================= INFO TABLE ================= */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-700 bg-[#15171c]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Equipment
              </span>

              <span className="text-sm text-slate-200">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Difficulty
              </span>

              <span className="text-sm text-slate-200">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Sets
              </span>

              <span className="text-sm text-slate-200">{workout.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Reps
              </span>

              <span className="text-sm text-slate-200">{workout.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FiClock />
                Duration
              </span>

              <span className="text-sm text-slate-200">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FaFire />
                Calories
              </span>

              <span className="text-sm text-slate-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <FiStar />
                Rating
              </span>

              <span className="text-sm text-slate-200">{workout.rating}</span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-8">
            <h2 className="text-lg font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-sm leading-5 text-slate-300"
                >
                  <span className="font-bold text-white">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300">
              <FiCalendar size={18} />
              Add to today's plan
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400">
              <FiBookmark size={18} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
