import { Input } from './ui/input'
import { Label } from './ui/label'

export function ApiSidebar() {
  return (
    <div className="w-64 bg-[#2f2f2f] rounded-lg p-4">
      <div className="mb-4">
        <Label htmlFor="api-key" className="block text-sm font-medium text-gray-400 mb-1">
          API Key
        </Label>
        <Input id="api-key" className="w-full bg-[#1c1c1c] border-gray-700 text-white" />
      </div>
      <div>
        <Label htmlFor="llm" className="block text-sm font-medium text-gray-400 mb-1">
          LLM
        </Label>
        <Input id="llm" className="w-full bg-[#1c1c1c] border-gray-700 text-white" />
      </div>
    </div>
  )
}

