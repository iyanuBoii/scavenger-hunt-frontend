"use client";

const ConfirmJoinChallengeDialog = ({
  challengeTitle,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-sm rounded-xl bg-[#121727] p-6 text-center">
        <h3 className="text-lg font-orbitron font-semibold text-white">
          Join this challenge?
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          You&apos;re about to submit your entry for{" "}
          <span className="text-white">{challengeTitle}</span>. Make sure
          you&apos;re ready before continuing.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-lg bg-white/10 py-2 text-sm text-white hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-lg bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] py-2 text-sm text-white hover:opacity-90 transition-opacity"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmJoinChallengeDialog;
