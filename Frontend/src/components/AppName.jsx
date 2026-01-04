export function AppName() {
  return (
    <div className="w-full py-8 mb-6 text-center">

      {/* Classy Gradient Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight
        bg-gradient-to-r from-indigo-700 to-purple-700
        bg-clip-text text-transparent"
      >
        ToDo Application
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-sm md:text-base text-slate-500">
        Organize your tasks. Stay productive.
        <span className="ml-1 text-indigo-600 font-medium">✔</span>
      </p>

      {/* Subtle Accent Line */}
      <div
        className="mt-4 mx-auto h-0.5 w-20 rounded-full
        bg-gradient-to-r from-indigo-400 to-purple-400 opacity-70"
      />

    </div>
  );
}
