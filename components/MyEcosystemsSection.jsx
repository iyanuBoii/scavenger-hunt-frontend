/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 12:14:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
"use client"
import Link from "next/link";
import EcosystemCard from "./EcosystemCard";

const EcosystemSection = ({ ecosystems = [] }) => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 pt-12 pb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white font-orbitron">
          My Ecosystems
        </h2>
        {ecosystems.length > 0 && (
          <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-orbitron">
            View all
          </button>
        )}
      </div>

      {ecosystems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/20 py-12 text-center">
          <p className="text-white font-orbitron">You haven&apos;t joined any ecosystems yet</p>
          <p className="text-sm text-gray-400 max-w-sm">
            Join an ecosystem to start completing challenges and earning rewards.
          </p>
          <Link
            href="/"
            className="mt-2 px-6 py-2 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white rounded-lg font-orbitron text-sm hover:opacity-90 transition-opacity"
          >
            Explore Ecosystems
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ecosystems.map((ecosystem, index) => (
            <EcosystemCard key={index} {...ecosystem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EcosystemSection;
