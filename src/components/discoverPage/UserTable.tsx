import { Badge } from "@/components/ui/badge";
import avatar from "gradient-avatar";

interface User {
  id: number;
  username: string;
  badges: string[];
  earnings: number;
  capabilities: string[];
}

const users: User[] = [
  {
    id: 1,
    username: "InfinityCrypto",
    badges: ["0x942c", "verified"],
    earnings: 56.7,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 2,
    username: "InfinityCrypto",
    badges: ["0x942c", "verified"],
    earnings: 0,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 3,
    username: "0x842c",
    badges: [],
    earnings: 0.36,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 4,
    username: "0x942c",
    badges: [],
    earnings: 0.36,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 5,
    username: "InfinityCrypto",
    badges: ["0x942c"],
    earnings: 0,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 6,
    username: "InfinityCrypto",
    badges: ["0x942c", "verified"],
    earnings: 0,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 7,
    username: "InfinityCrypto",
    badges: ["0x942c"],
    earnings: 0,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 8,
    username: "0x942c",
    badges: [],
    earnings: 56.7,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
  {
    id: 9,
    username: "InfinityCrypto",
    badges: ["0x942c"],
    earnings: 0,
    capabilities: ["TOKEN CREATION", "AIRDROP"],
  },
];

export function UserTable() {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-700">
            <th className="py-3 px-4 text-left">USER</th>
            <th className="py-3 px-4 text-left">EARNINGS</th>
            <th className="py-3 px-4 text-left">CAPABILITIES</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-700 last:border-b-0"
            >
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <div className="mr-3">{user.id}</div>
                  <div
                    className="w-8 h-8 rounded-full mr-3"
                    dangerouslySetInnerHTML={{
                      __html: avatar(user.username, 32),
                    }}
                  />
                  <div>
                    <div className="text-white">{user.username}</div>
                    <div className="flex space-x-1">
                      {user.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="text-green-500">
                  ${user.earnings.toFixed(2)}
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  {user.capabilities.map((capability, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`text-xs ${
                        capability === "TOKEN CREATION"
                          ? "border-blue-500 text-blue-500"
                          : "border-orange-500 text-orange-500"
                      }`}
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
