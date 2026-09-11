const PROGRESS_STYLES = {
  "not-started": {
    label: "Not Started",
    className: "bg-[#858894] text-white",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-[#F5A623] text-black",
  },
  completed: {
    label: "Completed",
    className: "bg-[#439F6E] text-white",
  },
};

const deriveStatus = (progress) => {
  if (progress >= 100) return "completed";
  if (progress > 0) return "in-progress";
  return "not-started";
};

const ChallengeProgressBadge = ({ progress = 0, className = "" }) => {
  const status = deriveStatus(progress);
  const { label, className: styles } = PROGRESS_STYLES[status];

  return (
    <span
      className={`inline-flex items-center rounded-[4px] px-2 py-[2px] text-[8px] lg:text-[11px] font-orbitron font-bold uppercase ${styles} ${className}`}
      title={`${Math.min(100, Math.max(0, progress))}% complete`}
    >
      {label}
    </span>
  );
};

export default ChallengeProgressBadge;
