"use client";

import React, { useState } from "react";
import wallet from "@/public/images/walleticon.png";
import Image from "next/image";
import { SelectWallet } from "@/components/wallet/SelectWallet";

const ConnectWalletButton = () => {
   const [isConnecting, setIsConnecting] = useState(false);

   const handleClick = () => {
      setIsConnecting(true);
   };

   const handleClose = () => {
      setIsConnecting(false);
   };

   return (
      <>
         <button
            type="button"
            onClick={handleClick}
            disabled={isConnecting}
            aria-busy={isConnecting}
            className="border-[1px] border-solid border-[#E4489F4D] h-[50px] rounded-[10px] w-[170px] sm:min-w-[195px] flex flex-row items-center text-[#E9E9E9] text-[16px] font-[500] justify-center gap-2 space-grotesk disabled:opacity-70 disabled:cursor-not-allowed"
         >
            {isConnecting ? (
               <span className="w-4 h-4 border-2 border-[#E9E9E9] border-t-transparent rounded-full animate-spin" />
            ) : (
               <Image src={wallet} alt="wallet" className="w-[20px] h-[24px]" />
            )}
            {isConnecting ? "Connecting..." : "Connect wallet"}
         </button>
         {isConnecting && <SelectWallet onClose={handleClose} />}
      </>
   );
};

export default ConnectWalletButton;
