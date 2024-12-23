import { ArrowLeft } from "lucide-react";
import { WalletCard } from "./WalletCard";
import { ActivityList } from "./ActivityList";
import { ApiSidebar } from "./ApiSidebar";

interface Agent {
  name: string;
  username: string;
  balance: number;
  recentChange: number;
  capabilities: string[];
}

interface WalletPageComponentProps {
  agent: Agent;
  onBack: () => void;
}

export function WalletPageComponent({
  agent,
  onBack,
}: WalletPageComponentProps) {
  return (
    <div className="p-6 h-screen flex flex-col">
      <button
        onClick={onBack}
        className="flex items-center text-white mb-4 hover:text-gray-300"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Agents
      </button>
      <WalletCard agent={agent} />
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Activity</h2>
      <div className="flex gap-6 flex-1">
        {/* ActivityList is scrollable */}
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-250px)] pr-4">
          <ActivityList />
        </div>
        <ApiSidebar />
      </div>
    </div>
  );
}

