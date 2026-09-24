import Banner from "@/assets/banner.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 my-10">
      <div className="relative flex min-h-[445px] overflow-hidden rounded-2xl border border-slate-700 bg-[#15171c]">
        {/* Content */}
        <div className="relative z-10 flex min-h-[445px] items-center">
          <div className="max-w-2xl px-8 py-12 md:px-14">
            {/* Small heading */}
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.12em] text-lime-400">
              Workout Library
            </p>

            {/* Main heading */}
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              Train with intent. Log every set.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-6 text-slate-400 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <button
              type="button"
              className="mt-7 rounded-md bg-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition duration-200 hover:bg-lime-300"
            >
              Browse Workouts
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative z-10 flex min-h-[445px] items-center">
          <div>
            <Image
              src={Banner}
              alt="Workout illustration"
              height={200}
              width={450}
              priority
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
