import BannerImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#15171c]">
        <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex items-center">
            <div className="px-8 py-14 md:px-14">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-lime-400">
                Workout Library
              </p>

              <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Train with intent. Log every set.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                FitLog is your dark, no-nonsense gym companion. Pick a lift, add
                it to today&apos;s plan, and keep track of your progress.
              </p>

              <Link
                href="/"
                className="mt-8 inline-block rounded-lg bg-lime-400 px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] lg:min-h-[500px]">
            <Image
              src={BannerImage}
              alt="Workout illustration"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
