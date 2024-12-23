import {
  Home,
  Compass,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Wallet,
} from "lucide-react";
import CustomButton from "./CustomButton";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const pathname = usePathname();

  return (
    <aside
      className={`bg-green-600 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen ? (
          <>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M6 26L26 6V26H6Z" fill="#ffffff" />
            </svg>
            <span className="text-2xl font-bold text-white">EarnKit</span>
          </>
        ) : (
          <div className="flex-grow flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 26L26 6V26H6Z" fill="#ffffff" />
            </svg>
          </div>
        )}
        <button onClick={toggleSidebar} className="text-white p-2">
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      <nav className="flex-grow flex flex-col justify-between p-4">
        <ul className="space-y-2">
          <CustomButton toggleState={isOpen} />
          <SidebarItem
            icon={Home}
            href="/"
            label="Home"
            isOpen={isOpen}
            isActive={pathname === "/"}
          />
          <SidebarItem
            icon={Compass}
            href="/discover"
            label="Discover"
            isOpen={isOpen}
            isActive={pathname === "/discover"}
          />
        </ul>
        <ul className="space-y-2">
          {isConnected && (
            <>
              <SidebarItem
                icon={Settings}
                href="/settings"
                label="Settings"
                isOpen={isOpen}
                isActive={pathname === "/settings"}
              />
              <SidebarItem
                icon={LogOut}
                label="Logout"
                onClick={() => disconnect()}
                isOpen={isOpen}
              />
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isOpen: boolean;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

function SidebarItem({
  icon: Icon,
  label,
  isOpen,
  href,
  onClick,
  isActive,
}: SidebarItemProps) {
  const content = (
    <div
      className={`flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200 ${
        isActive ? "bg-green-700 text-white" : "text-white hover:bg-green-700"
      }`}
    >
      <Icon className="mr-2" />
      {isOpen && <span>{label}</span>}
    </div>
  );

  if (onClick) {
    return (
      <li>
        <button onClick={onClick} className="w-full">
          {content}
        </button>
      </li>
    );
  }

  if (href) {
    return (
      <li>
        <Link href={href} className="block">
          {content}
        </Link>
      </li>
    );
  }

  return <li>{content}</li>;
}

export default Sidebar;
