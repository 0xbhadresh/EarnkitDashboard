import { WalletCard } from './WalletCard'
import { ActivityList } from './ActivityList'
import { ApiSidebar } from './ApiSidebar'

interface WalletProps {
  name: string
  username: string
  balance: number
  recentChange: number
}

export function Wallet({ name, username, balance, recentChange }: WalletProps) {
  return (
    <div className="p-6">
      <WalletCard name={name} username={username} balance={balance} recentChange={recentChange} />
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Activity</h2>
      <div className="flex gap-6">
        <div className="flex-1">
          <ActivityList />
        </div>
        <ApiSidebar />
      </div>
    </div>
  )
}

