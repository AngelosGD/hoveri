import HeartIcon from "@/icons/heart-icon";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        hoveri
      </p>
      <h1 className="mt-6 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-6xl">
        Icons that move with intent
      </h1>
      <p className="mt-4 max-w-md text-center text-base leading-7 text-zinc-600">
        Animated icons for React, built with Motion. Hover the icon below.
      </p>

      <div className="mt-16 flex items-center justify-center rounded-full border border-zinc-200 bg-white p-10 shadow-sm">
        <HeartIcon size={64} className="text-rose-500" />
      </div>

      <p className="mt-8 font-mono text-sm text-zinc-400">hover me</p>
    </main>
  );
}