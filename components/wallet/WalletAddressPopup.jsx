"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, LogOut } from "lucide-react";
import { WalletIcon } from "./WalletIcon";

export const WalletAddressPopup = ({ address, onDisconnect, onClose, walletName }) => {
  const [copied, setCopied] = useState(false);
  const [confirmingDisconnect, setConfirmingDisconnect] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end font-orbitron">
      <div
        className="absolute inset-0 md:bg-[#1C338200]/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex flex-col w-full max-w-[400px] overflow-hidden rounded-xl bg-[#121727] m-6 md:mt-10 md:mr-10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <WalletIcon walletName={walletName} className="w-6 h-6" />
              <h2 className="text-lg font-medium text-white">Connected Wallet</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <QRCodeSVG value={address} size={200} />
            </div>

            <div className="flex items-center space-x-2 w-full">
              <div className="flex-1 p-3 bg-[#1A1A2F] rounded-lg text-sm text-gray-300 font-mono truncate">
                {address}
              </div>
              <button
                onClick={copyAddress}
                className="p-3 bg-[#1A1A2F] rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            {copied && (
              <p className="text-green-500 text-sm">Address copied!</p>
            )}

            {confirmingDisconnect ? (
              <div className="w-full space-y-2 p-3 bg-red-500/10 rounded-lg">
                <p className="text-sm text-red-500">Disconnect this wallet?</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onDisconnect}
                    className="flex-1 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                  >
                    Disconnect
                  </button>
                  <button
                    onClick={() => setConfirmingDisconnect(false)}
                    className="flex-1 p-2 bg-[#1A1A2F] text-gray-300 rounded-lg hover:text-white transition-colors text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirmingDisconnect(true)}
                className="flex items-center space-x-2 w-full p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Disconnect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
