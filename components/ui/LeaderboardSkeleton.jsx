const ROW_COUNT = 5;

export default function LeaderboardSkeleton() {
  return (
    <div
      className="max-w-screen-sm overflow-auto md:w-full"
      aria-hidden="true"
    >
      <div className="flex-col py-6 w-[640px] overflow-hidden border border-gray-800 md:flex-row px-7 rounded-3xl animate-pulse">
        <div className="bg-[#0f111e] p-6 rounded-[10px]">
          <div className="h-4 w-1/2 rounded bg-[#D9D9D933]" />
        </div>

        <div className="mt-6 space-y-4">
          {Array.from({ length: ROW_COUNT }).map((_, index) => (
            <div
              key={index}
              className="bg-[#0f111e] py-[14px] px-[22px] rounded-[10px]"
            >
              <div className="flex items-center justify-between">
                <div className="h-4 w-10 rounded bg-[#D9D9D933]" />
                <div className="h-10 w-10 rounded-full bg-[#D9D9D933]" />
                <div className="h-4 w-24 rounded bg-[#D9D9D933]" />
                <div className="h-4 w-12 rounded bg-[#D9D9D933]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
