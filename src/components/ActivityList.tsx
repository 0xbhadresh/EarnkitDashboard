import { Badge } from "./ui/badge";
import Image from "next/image";

const activities = [
  {
    id: 1,
    user: "KaveeHeaven",
    action: "sent $CROWD to 10 recipients",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...",
    type: "Token Creation",
    time: "2 Hours Ago",
  },
  {
    id: 2,
    user: "CryptoKing",
    action: "sent $CROWD to 10 recipients",
    description: "Launching the latest airdrop campaign for the community.",
    type: "AIRDROP",
    time: "3 Hours Ago",
  },
  {
    id: 3,
    user: "BlockchainDev",
    action: "sent $CROWD to 12 recipients",
    description: "Airdrop for early participants in the platform's beta.",
    type: "AIRDROP",
    time: "4 Hours Ago",
  },
  {
    id: 4,
    user: "DegenWarrior",
    action: "sent $CROWD to 15 recipients",
    description: "Distributing tokens as part of a special event.",
    type: "AIRDROP",
    time: "5 Hours Ago",
  },
  {
    id: 5,
    user: "TechInnovator",
    action: "created a new $CROWD token",
    description: "Token creation to support the upcoming DeFi protocol launch.",
    type: "Token Creation",
    time: "6 Hours Ago",
  },
  {
    id: 6,
    user: "DeFiMaster",
    action: "sent $CROWD to 20 recipients",
    description: "Airdrop event to reward the early supporters of the project.",
    type: "AIRDROP",
    time: "7 Hours Ago",
  },
  {
    id: 7,
    user: "NFTCollector",
    action: "sent $CROWD to 8 recipients",
    description: "Airdrop for exclusive NFT holders.",
    type: "AIRDROP",
    time: "8 Hours Ago",
  },
  {
    id: 8,
    user: "Web3Explorer",
    action: "created a new $CROWD token",
    description: "Launched a new token to support decentralized applications.",
    type: "Token Creation",
    time: "9 Hours Ago",
  },
  {
    id: 9,
    user: "CryptoAdventurer",
    action: "sent $CROWD to 25 recipients",
    description: "Airdrop campaign for a new partnership announcement.",
    type: "AIRDROP",
    time: "10 Hours Ago",
  },
  {
    id: 10,
    user: "DeFiWizard",
    action: "created a new $CROWD token",
    description:
      "Launching a token to incentivize liquidity provision on DeFi platforms.",
    type: "Token Creation",
    time: "11 Hours Ago",
  },
];

export function ActivityList() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-[#2f2f2f] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold mr-1 text-white">
                  {activity.user}
                </span>
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-400">{activity.action}</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            {activity.description}
            <span className="text-green-500 ml-1">MORE</span>
          </p>
          <div className="flex justify-between items-center">
            <Badge
              variant="outline"
              className="bg-green-500/10 text-orange-500 border-orange-500"
            >
              {activity.type}
            </Badge>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1 overflow-hidden">
                <Image
                  className="inline-block w-6 h-6 rounded-full ring-2"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User 1"
                  width={24}
                  height={24}
                />
                <Image
                  className="inline-block w-6 h-6 rounded-full ring-2"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User 2"
                  width={24}
                  height={24}
                />
                <Image
                  className="inline-block w-6 h-6 rounded-full ring-2 "
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="User 3"
                  width={24}
                  height={24}
                />
                <Image
                  className="inline-block w-6 h-6 rounded-full ring-2"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User 4"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
