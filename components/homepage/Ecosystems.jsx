import { useEffect, useState } from "react";
import StarknetLogo from "@/public/ecosystems/Starknet_Symbol.png";
import StellarLogo from "@/public/ecosystems/Stellar_Symbol.png";
import Web3Logo from "@/public/ecosystems/Web3_Symbol.jpg";
import WorldcoinLogo from "@/public/ecosystems/Worldcoin_Symbol.png";
import EcosystemCard from "../ui/EcosystemCard";
import EcosystemCardSkeleton from "../ui/EcosystemCardSkeleton";
import { motion } from "framer-motion";

export default function Ecosystems() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const ecosystems = [
    {
      title: "Starknet",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StellarLogo,
    },
    {
      title: "Worldcoin",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Web3",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: Web3Logo,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.main
      className="max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.section className="text-center mb-10 mt-8 flex md:gap-5 lg:gap-10 items-center justify-center">
        <motion.hr
          className="hidden md:block w-36 border-t border-[#858894]"
          variants={lineVariants}
        />
        <motion.div variants={headerVariants}>
          <motion.h1
            className="text-2xl md:text-3xl tracking-tight lg:text-4xl mb-2 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Understand different ecosystems
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              all in one place.
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-4 text-xs md:text-sm"
            variants={headerVariants}
          >
            Learn about various blockchain ecosystems.
          </motion.p>
        </motion.div>
        <motion.hr
          className="hidden md:block w-36 border-t border-[#858894]"
          variants={lineVariants}
        />
      </motion.section>

      <motion.section
        className="grid p-3 justify-center md:grid-cols-2 gap-5"
        variants={containerVariants}
      >
        {isLoading
          ? ecosystems.map((ecosystem) => (
              <EcosystemCardSkeleton key={ecosystem.title} />
            ))
          : ecosystems.map((ecosystem) => (
              <motion.div
                key={ecosystem.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <EcosystemCard {...ecosystem} />
              </motion.div>
            ))}
      </motion.section>
    </motion.main>
  );
}
