import { UserTable } from "@/components/discoverPage/UserTable";

export default function DiscoverPage() {
  return (
    <div className="flex h-screen bg-black">
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Discover</h1>
          <UserTable />
        </main>
      </div>
    </div>
  );
}
