"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";

interface CustomButtonProps {
  toggleState: boolean; // toggleState for sidebar open/closed
}

export default function CustomButton({ toggleState }: CustomButtonProps) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {!connected ? (
              <button
                onClick={openConnectModal}
                type="button"
                className="w-full bg-white text-green-500 rounded-lg py-3 px-4 font-medium"
              >
                Connect Wallet
              </button>
            ) : (
              <div
                onClick={openAccountModal}
                className="flex items-center w-full p-2 text-white rounded-md cursor-pointer hover:bg-green-700 transition-colors duration-200"
              >
                {toggleState ? (
                  <>
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        S
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{account.displayName}</span>
                      <span className="text-sm text-white/60">
                        {account.displayBalance}
                      </span>
                    </div>
                  </>
                ) : (
                  <Wallet />
                )}
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
