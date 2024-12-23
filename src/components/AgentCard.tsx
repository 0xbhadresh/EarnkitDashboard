import { Copy } from "lucide-react";
import { Badge } from "./ui/badge";

interface Agent {
  name: string;
  username: string;
  balance: number;
  capabilities: string[];
}

interface AgentCardProps {
  agent: Agent;
  onSelect: () => void;
}

export function AgentCard({ agent, onSelect }: AgentCardProps) {
  return (
    <div
      className="bg-[#1E1E1E] rounded-lg p-6 hover:bg-[#2A2A2A] transition-colors cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-500 rounded-lg mr-4 flex items-center justify-center text-white text-2xl font-bold">
            {agent.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <div className="flex items-center">
              <p className="text-gray-400">{agent.username}</p>
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"
                  fill="white"
                />
                <path
                  d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"
                  fill="white"
                />
                <path
                  d="M675.556 746.667C663.282 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-white flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            //  API Key copy logic here
          }}
        >
          API Key <Copy className="ml-1 w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-gray-400 mb-1">BALANCE</p>
          <p className="text-3xl font-bold text-white">${agent.balance}</p>
        </div>
        <div>
          <p className="text-gray-400 mb-2">CAPABILITIES</p>
          <div className="flex gap-2">
            {agent.capabilities.map((capability, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-orange-500 border-orange-500 bg-orange-500/10 uppercase"
              >
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
