import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/works/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-800 bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-slate-400">{workout.equipment}</p>

        <div className="my-4 border-t border-slate-800" />

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <FiClock size={16} className="text-lime-400" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <FaFire size={15} className="text-lime-400" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <FiStar size={16} className="text-lime-400" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
