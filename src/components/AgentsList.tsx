import { AgentCard } from "./AgentCard";

export interface Agent {
  name: string;
  username: string;
  balance: number;
  capabilities: string[];
  recentChange: number;
}

interface AgentsListProps {
  onAgentSelect: (agent: Agent | null) => void;
}

export function AgentsList({ onAgentSelect }: AgentsListProps) {
  const agents: Agent[] = [
    {
      name: "Mitchell Luo",
      username: "@mitchell.luo",
      balance: 343.33,
      capabilities: ["TOKEN CREATION", "AIRDROP"],
      recentChange: 0.322,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
    {
      name: "john caff",
      username: "@john",
      balance: 3333.33,
      capabilities: ["TOKEN CREATION"],
      recentChange: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {agents.map((agent, index) => (
        <AgentCard
          key={index}
          agent={agent}
          onSelect={() => onAgentSelect(agent)}
        />
      ))}
    </div>
  );
}
