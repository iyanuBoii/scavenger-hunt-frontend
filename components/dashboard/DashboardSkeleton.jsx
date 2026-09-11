export default function DashboardSkeleton() {
  return (
    <div className="w-full px-4 sm:px-6 pt-12 pb-16 animate-pulse" aria-hidden="true">
      <div className="h-8 w-48 rounded bg-[#D9D9D933] mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-24 rounded-xl bg-[#D9D9D933]/40 p-6"
          />
        ))}
      </div>

      <div className="h-6 w-40 rounded bg-[#D9D9D933] mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="h-40 rounded-xl bg-[#D9D9D933]/40 p-8"
          />
        ))}
      </div>
    </div>
  );
}
