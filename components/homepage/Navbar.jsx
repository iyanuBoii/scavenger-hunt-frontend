"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../ui/Button";
import { useMetaMaskConnection } from "@/lib/useMetaMaskConnection";
import { useTrustWalletConnection } from "@/lib/useTrustWalletConnection";
import { useCoinbaseWalletConnection } from "@/lib/useCoinbaseWalletConnection";
import { Wallet } from "lucide-react";
import { SelectWallet } from "../wallet/SelectWallet";
import { WalletAddressPopup } from "../wallet/WalletAddressPopup";
import { WalletIcon } from "../wallet/WalletIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  const {
    address: metaMaskAddress,
    isConnected: isMetaMaskConnected,
    disconnectWallet: disconnectMetaMask,
    error: metaMaskError,
  } = useMetaMaskConnection();

  const {
    address: trustAddress,
    isConnected: isTrustConnected,
    disconnectWallet: disconnectTrust,
    error: trustError,
  } = useTrustWalletConnection();

  const {
    address: coinbaseAddress,
    isConnected: isCoinbaseConnected,
    disconnectWallet: disconnectCoinbase,
    error: coinbaseError,
  } = useCoinbaseWalletConnection();

  const connectedAddress = metaMaskAddress || trustAddress || coinbaseAddress;
  const isConnected =
    isMetaMaskConnected || isTrustConnected || isCoinbaseConnected;
  const connectionError = metaMaskError || trustError || coinbaseError;

  // Determine which wallet is connected
  const getConnectedWalletName = () => {
    if (isMetaMaskConnected) return "Metamask";
    if (isTrustConnected) return "Trust Wallet";
    if (isCoinbaseConnected) return "Coinbase Wallet";
    return null;
  };

  // Effect to close wallet modal when connected
  useEffect(() => {
    if (isConnected) {
      setShowWalletModal(false);
    }
  }, [isConnected]);

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  const handleDisconnect = async () => {
    if (isMetaMaskConnected) {
      await disconnectMetaMask();
    }
    if (isTrustConnected) {
      await disconnectTrust();
    }
    if (isCoinbaseConnected) {
      await disconnectCoinbase();
    }
    setShowAddressPopup(false);
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const WalletButton = () => {
    if (!isConnected) {
      return (
        <Button
          variant="gradient"
          className="px-6 py-2 text-lg font-bold h-fit text-texts-important"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </Button>
      );
    }

    const connectedWalletName = getConnectedWalletName();

    return (
      <div className="flex items-center gap-3">
        {/* Main wallet button with address */}
        <Button
          variant="gradient"
          className="flex items-center gap-2 px-6 py-2 text-lg font-bold h-fit text-texts-important"
          onClick={() => setShowAddressPopup(true)}
        >
          {formatAddress(connectedAddress)}
          <WalletIcon walletName={connectedWalletName} className="w-5 h-5" />
        </Button>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-5 bg-transparent md:px-12 space-grotesk">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/image.png"
          alt="Scavenger Hunt"
          width={170}
          height={48}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="items-center hidden space-x-12 text-lg text-texts-important font-spaceGrotesk md:flex">
        <Link 
          href="/" 
          className="font-medium relative group overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Home</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/about-us" 
          className="font-medium relative group overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">About Us</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/contact-us" 
          className="font-medium relative group overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <div className="flex items-center space-x-5">
          <Link
            href="#"
            className="bg-[#FD7DFF1A] flex justify-center font-orbitron font-bold py-2 rounded-lg mr-4 px-9 relative group overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(227,72,159,0.3)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Sign In</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#e3489f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <WalletButton />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="md:hidden text-[#d946ef] text-2xl bg-[#1a1a1a] p-2 rounded"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 flex flex-col z-50 items-center w-full p-6 space-y-4 bg-black top-16 bg-opacity-95 md:hidden">
          <Link href="#" className="text-lg text-white relative group overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#" className="text-lg text-white relative group overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">About Us</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#" className="text-lg text-white relative group overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Contact Us</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/sign-in" className="text-lg text-white relative group overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e3489f]">Sign In</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e3489f] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <WalletButton />
        </div>
      )}

      {/* Wallet Connection Error */}
      {connectionError && !isConnected && (
        <div className="fixed top-20 right-6 z-50 max-w-xs rounded-lg bg-red-500/10 border border-red-500/40 px-4 py-3 text-sm text-red-400 font-spaceGrotesk">
          {connectionError}
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && <SelectWallet onClose={handleCloseModal} />}

      {/* Wallet Address Popup */}
      {showAddressPopup && connectedAddress && (
        <WalletAddressPopup
          address={connectedAddress}
          onDisconnect={handleDisconnect}
          onClose={() => setShowAddressPopup(false)}
          walletName={getConnectedWalletName()}
        />
      )}
    </nav>
  );
};

export default Navbar;
