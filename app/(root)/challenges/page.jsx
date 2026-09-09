"use client";

import { useState } from "react";
import ChallengeCard from "@/components/challenges/ChallengeCard";
import ChallengeEnds from "@/components/challenges/ChallengeEnds";
import ChallengeMainCard from "@/components/challenges/ChallengeMainCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dummyChallenges } from "@/lib/mockdata";

const ecosystems = ["All", ...new Set(dummyChallenges.map((c) => c.ecosystem))];
function page() {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="relative flex flex-col w-full px-6 pt-32 overflow-hidden text-white md:pt-40 md:px-12 Orbitron">
        <div className="text-center ">
          <h1 className="font-semibold lg:text-[64px] sm:text-[48px] text-[24px]">
            Challenges <br />{" "}
            <span className="bg-gradient-to-r from-[#7d3eaf] to-[#e7499f] bg-clip-text text-transparent">
              Learn and Earn
              <br className="block md:hidden" /> reward
            </span>{" "}
          </h1>
        </div>
      </section>
      <section className="relative flex flex-col items-center w-full px-6 pt-12 text-white md:pt-24 md:px-12 Orbitron ">
        <div className="w-full max-w-[500px] mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search challenges by name..."
            aria-label="Search challenges by name"
            className="w-full h-[48px] rounded-[10px] bg-[#FD7DFF1A] border border-[#FD7DFF33] px-4 text-sm text-white placeholder:text-[#BFBFBF] focus:outline-none focus:border-[#E7499F]"
          />
        </div>
        <Tabs className="w-full " defaultValue="All">
          <div className="flex items-center justify-center w-fit mx-auto rounded-[10px] bg-[#FD7DFF1A] md:mb-60 mb-12">
            <TabsList className="grid md:w-[1000px] w-full grid-cols-5 bg-[#FD7DFF] bg-opacity-10 md:h-[50px] h-6 rounded-xl">
              {ecosystems.map((eco) => (
                <TabsTrigger
                  key={eco}
                  value={eco}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7D3EAF] data-[state=active]:to-[#E7499F] data-[state=active]:text-white text-white md:h-[40px] h-5  rounded-xl  font-medium md:text-xl text-xs"
                >
                  {eco}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <ChallengeEnds />
          </div>

          {ecosystems.map((eco) => (
            <TabsContent key={eco} value={eco} className="pb-8 mt-16 md:mt-32 ">
              <div className="flex flex-wrap gap-4 lg:w-[1240px] justify-center gap-y-4 w-full md:mx-auto ">
                {dummyChallenges
                  .filter(
                    (challenge) => eco === "All" || challenge.ecosystem === eco
                  )
                  .filter((challenge) =>
                    challenge.title
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  )
                  .map((challenge, index) => (
                    <ChallengeMainCard key={index} {...challenge} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}

export default page;
