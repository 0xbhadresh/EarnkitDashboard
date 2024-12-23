import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { WalletCard } from '../../components/WalletCard'
import { ActivityList } from '../../components/ActivityList'
import { ApiSidebar } from '../../components/ApiSidebar'

export default function WalletPage() {
  return (
    <div className="flex h-screen bg-[#1c1c1c] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <WalletCard />
          <h2 className="text-2xl font-bold mt-8 mb-4">Activity</h2>
          <div className="flex gap-6">
            <div className="flex-1">
              <ActivityList />
            </div>
            <ApiSidebar />
          </div>
        </main>
      </div>
    </div>
  )
}

