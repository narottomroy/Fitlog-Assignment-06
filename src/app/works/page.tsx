import WorkCard from "@/components/shared/WorkCard";
import { IWorkout } from "@/type/workoutType";

const getWorks = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutPage = async () => {
  const worksData = await getWorks();
  return (
    <div className="mx-auto w-full max-w-7xl px-4 my-10">
      <div>
        <h2 className="text-3xl font-bold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {worksData.map((work: IWorkout) => {
          return <WorkCard key={work.id} worksData={work}></WorkCard>;
        })}
      </div>
    </div>
  );
};

export default WorkoutPage;
