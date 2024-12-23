"use client";

import { useState } from "react";
import { Agent } from "@/components/AgentsList";

import { AgentsList } from "@/components/AgentsList";
import { WalletPageComponent } from "@/components/WalletPageComponent";
import { useAccount } from "wagmi";

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const { isConnected } = useAccount();

  return (
    <main className="flex-1 overflow-auto p-6">
      {selectedAgent ? (
        <WalletPageComponent
          agent={selectedAgent}
          onBack={() => setSelectedAgent(null)}
        />
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-2 text-white">Agents</h1>
          <p className="text-gray-400 mb-6">Create AI agents on Farcaster</p>
          {isConnected ? (
            <AgentsList onAgentSelect={setSelectedAgent} />
          ) : (
            <p className="text-white">
              Connect your Wallet to see the Dashboard
            </p>
          )}
        </div>
      )}
    </main>
  );
}
