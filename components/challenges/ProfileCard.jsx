/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 13:24:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
import React from "react";
import Image from "next/image";
import { StatCard } from "./StatCard";

export default function ProfileCard({ user }) {
	const isNewUser = !user.joinedChallenge;
	const isInChallenge = user.joinedChallenge && !user.earnedNFT;

	return (
		<div className="rounded-3xl border border-[#EC48994D] bg-[#0e0e20]/50 p-4 sm:p-6 backdrop-blur-sm min-h-40 overflow-hidden">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
				<div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-4 sm:gap-6 min-w-0">
					<div className="relative h-24 w-24 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-2xl">
						<Image
							src={"/images/profile.png"}
							alt={"hey"}
							width={140}
							height={140}
							className="object-contain rounded-2xl"
						/>
					</div>
					<div className="space-y-5 min-w-0">
						<div className="text-xs font-orbitron bg-[#171C2B] text-[#FFFFFFCC] px-3 py-[3px] w-[100px]">{user.id}</div>
						<h2 className="text-xl font-bold font-spaceGrotesk break-words">{user.name}</h2>
						<div className="flex items-center gap-2">
							<Image
								src={"/images/sergeant.svg"}
								alt="rank"
								width={24}
								height={24}
							/>
							<div className="flex">
								<div className="h-8 w-2.5 bg-purple-500"></div>
								<div className="w-24 max-w-32 h-8 bg-[#171C2B] text-center flex items-center px-3 font-orbitron text-sm">{user.level}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1"></div>

				<div className="grid grid-cols-3 gap-4 w-full md:w-auto self-center">
					{isNewUser && (
						<StatCard
							label="Games played"
							value={user.stats.gamesPlayed}
						/>
					)}
					{isInChallenge && (
						<StatCard
							label="Games completed"
							value={user.stats.gamesCompleted}
						/>
					)}
					<StatCard
						label="NFT collected"
						value={user.stats.nftCollected}
					/>
					<StatCard
						label="Eco system"
						value={user.stats.ecoSystem}
					/>
				</div>
			</div>
		</div>
	);
}
