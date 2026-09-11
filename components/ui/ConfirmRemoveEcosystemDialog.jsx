"use client";

const ConfirmRemoveEcosystemDialog = ({
  ecosystemName,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-sm rounded-xl bg-[#121727] p-6 text-center">
        <h3 className="text-lg font-orbitron font-semibold text-white">
          Remove ecosystem?
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          Are you sure you want to remove{" "}
          <span className="text-white">{ecosystemName}</span> from your
          dashboard? This action cannot be undone.
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
            className="flex-1 rounded-lg bg-red-500 py-2 text-sm text-white hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRemoveEcosystemDialog;
