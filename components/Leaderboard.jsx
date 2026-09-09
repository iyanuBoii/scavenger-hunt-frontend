import { cn } from "@/lib/utils";
import SubheadingLeft from "./SubheadingLeft";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

const LeaderBoard = ({ slice, players }) => {
  return (
    <div className="">
      <SubheadingLeft
        wrapperClassName="text-[#E9E9E9] mb-4"
        text={`Top ${slice} players`}
      />

      <div className="max-w-screen-sm overflow-auto md:w-full">
        <div className="flex-col py-6 w-[640px] overflow-hidden border border-gray-800 md:flex-row px-7 rounded-3xl">
          <div className="bg-[#0f111e] p-6 rounded-[10px]">
            <div className="grid grid-cols-4 text-texts-important text-sm font-orbitron font-medium border-[1px] border-[#FFFFFF03]">
              <div className="text-left">Rank</div>
              <div className="text-left">Player</div>
              <div className="text-center">Score</div>
              <div className="text-right">NFT earned</div>
            </div>
          </div>

          {(!players || players.length === 0) ? (
            <div className="mt-6 flex flex-col items-center justify-center gap-2 py-12 text-center">
              <span className="text-texts-important font-orbitron text-sm font-medium">
                No players on the leaderboard yet
              </span>
              <span className="text-texts-placeholder text-xs">
                Complete a challenge to be the first to appear here.
              </span>
            </div>
          ) : (
          <div className="mt-6 space-y-4">
            {players.map((player, index) => (
              <div
                className="bg-[#0f111e] py-[14px] px-[22px] rounded-[10px]"
                key={index}
              >
                <div className="text-sm border-[1px] border-[#FFFFFF03] rounded-[10px] grid grid-cols-4 items-center">
                  <div className="flex items-center justify-start space-x-2">
                    <span className="text-sm font-medium">{player.id}</span>
                    <span className="hidden text-[10px] text-texts-placeholder font-orbitron md:inline">
                      ( {player.rank} )
                    </span>
                  </div>

                  <div className="flex items-center justify-start space-x-4">
                    <div className="relative w-[42px] h-[42px] overflow-hidden bg-gray-800 rounded-full">
                      <Image
                        src={`/nfts/nft-${player.id}.png`}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium font-orbitron text-texts-important">
                      {player.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium font-orbitron text-texts-important">
                      {player.score}
                    </span>
                    {player.trend === "up" ? (
                      <ArrowUp className="w-6 h-10 text-green-500 md:w-8 md:h-8" />
                    ) : (
                      <ArrowDown className="w-6 h-10 text-red-500 md:w-8 md:h-8" />
                    )}
                  </div>

                  <div className="flex items-center justify-end space-x-2">
                    <span className="text-sm font-medium font-orbitron text-texts-important">
                      {player.nfts_earned}
                    </span>
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5, 6, 7]
                        .slice(0, Math.floor(player.nfts_earned / 10) + 1)
                        .map((num) => (
                          <div
                            key={num}
                            className="relative w-6 h-6 overflow-hidden bg-gray-800 border border-gray-700 rounded-full"
                          >
                            <Image
                              src={`/nfts/nft-${num}.png`}
                              alt="NFT icon"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
