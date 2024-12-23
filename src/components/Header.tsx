import { Button } from "./ui/button";
import { useAccount } from "wagmi";

export function Header() {
  const { isConnected } = useAccount();
  return (
    <header className="flex justify-end items-center p-4 bg-black">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="text-white hover:text-green-500">
          Docs
        </Button>
        {isConnected ? (
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100"
          >
            + Create
          </Button>
        ) : null}
      </div>
    </header>
  );
}
