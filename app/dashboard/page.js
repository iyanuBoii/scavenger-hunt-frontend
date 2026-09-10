/**
    * @description      : Dashboard with NFT Showcase Integration - Layout Fixed
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 13:51:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.1
    * - Date            : 14/06/2025
    * - Author          : 
    * - Modification    : Fixed layout arrangement to match target design
**/
import ProfileCard from "@/components/challenges/ProfileCard";
import WelcomeSection from "@/components/challenges/WelcomeSection";
import ChallengesSection from "@/components/challenges/ChallengeSection";
import OngoingChallenges from "@/components/challenges/OngoingChallenges";
import MyEcosystemsSection from "@/components/MyEcosystemsSection";
import NFTShowcase from "@/components/dashboard/NftShowCase";
import {
  userProfile,
  onboardingSteps,
  activeChallenges,
  ongoingChallenges,
  myEcosystems,
} from "@/lib/data";

export default function Dashboard() {
  const hasJoinedChallenges = ongoingChallenges.length > 0;
  const hasEarnedNFT = userProfile.earnedNFTs && userProfile.earnedNFTs.length > 0;

  // Transform ongoing challenges data to match the new component structure
  const transformedOngoingChallenges = ongoingChallenges.map(challenge => ({
    id: challenge.id,
    title: challenge.title,
    description: challenge.description,
    image: challenge.image,
    status: "active",
    difficulty: challenge.difficulty,
    category: challenge.category
  }));

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a1a] text-white bg-[url('/images/challenges-section-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        
        <ProfileCard user={userProfile} />

        {hasJoinedChallenges ? (
          <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <OngoingChallenges 
              challenges={transformedOngoingChallenges} 
              title="My ongoing challenges"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {hasEarnedNFT && (
              <div>
                <NFTShowcase nfts={userProfile.earnedNFTs} />
              </div>
            )}
            
            <div>
              <MyEcosystemsSection ecosystems={myEcosystems} />
            </div>
          </div>
        </div>

        ) : (
          <>
            <WelcomeSection
              steps={onboardingSteps}
              username={userProfile.name.split(" ")[0]}
            />
            <ChallengesSection challenges={activeChallenges} />
          </>
        )}
        {hasJoinedChallenges && (
          <div className="mt-8">
            <ChallengesSection challenges={activeChallenges} />
          </div>
        )}
      </div>
    </div>
  );
}