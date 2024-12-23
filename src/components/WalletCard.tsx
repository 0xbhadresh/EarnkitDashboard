"use client";
import DepositModal from "./DepositeModel/DepositeModel";
import { Button } from "./ui/button";
import { useState, useCallback } from "react";

interface Agent {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
}

interface WalletCardProps {
  agent: Agent;
}

export function WalletCard({ agent }: WalletCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to open the modal
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  // Function to close the modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  return (
    <div className="bg-[#2f2f2f] rounded-lg p-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-600 rounded-lg mr-4"></div>
        <div>
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2 text-white">{agent.name}</h2>
            <span className="text-gray-400 text-sm">{agent.username}</span>
          </div>
          <div className="text-3xl font-bold text-white">
            ${agent.balance.toFixed(2)}
          </div>
          <div className="text-green-500">
            + {agent.recentChange.toFixed(2)}(
            {((agent.recentChange / agent.balance) * 100).toFixed(2)}%)
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="bg-gray-700 text-white hover:bg-gray-600"
        >
          Withdraw
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => setIsModalOpen(true)}
        >
          Deposit
        </Button>
      </div>
      <DepositModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
