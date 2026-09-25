import { IWorkout } from "@/type/workoutType";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";

interface IWorkoutProps {
  worksData: IWorkout;
}

const WorkCard = ({ worksData }: IWorkoutProps) => {
  return (
    <div>
      <Link
        href={`/works/${worksData.id}`}
        className="group block overflow-hidden rounded-2xl border border-slate-700 bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10"
      >
        {/* Image */}
        <div className="relative aspect-[2/2] w-full overflow-hidden">
          <Image
            src={worksData.image}
            alt={worksData.name}
            width={450}
            height={200}
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {worksData.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
            {worksData.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-slate-400">{worksData.equipment}</p>

          {/* Divider */}
          <div className="my-4 border-t border-slate-700" />

          {/* Workout Stats */}
          <div className="flex items-center gap-5 text-sm text-slate-400">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <FiClock size={16} />
              <span>{worksData.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <FaFire size={15} />
              <span>{worksData.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FiStar size={16} />
              <span>{worksData.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
