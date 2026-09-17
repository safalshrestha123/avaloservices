export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b14] px-6 text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center">
          <span className="text-2xl font-bold tracking-tight">
            Avalo <span className="text-blue-500">Technical Services LLC</span>
          </span>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
          Something great is on the way
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          We&apos;re building
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            something amazing.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-zinc-400">
          Avalo Technical Services LLC is getting a new experience. We&apos;re working behind
          the scenes to bring you something better.
        </p>

        {/* Coming Soon */}
        <div className="mt-10">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Coming Soon
          </span>
        </div>

        {/* Footer */}
        <p className="mt-20 text-sm text-zinc-600">
          © {new Date().getFullYear()} Avalo Technical Services LLC. All rights reserved.
        </p>
      </div>
    </main>
  );
}
