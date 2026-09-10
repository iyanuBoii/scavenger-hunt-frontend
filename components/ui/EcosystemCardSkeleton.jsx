export default function EcosystemCardSkeleton() {
  return (
    <div
      className="relative w-full max-w-md overflow-hidden rounded-xl bg-[#D9D9D933]/5 p-8 backdrop-blur-xl shadow-lg animate-pulse"
      aria-hidden="true"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="h-12 w-40 rounded-full bg-[#D9D9D933]" />
      </div>
      <div className="space-y-3">
        <div className="h-6 w-1/2 rounded bg-[#D9D9D933]" />
        <div className="h-4 w-full rounded bg-[#D9D9D933]" />
        <div className="h-4 w-3/4 rounded bg-[#D9D9D933]" />
      </div>
    </div>
  );
}
