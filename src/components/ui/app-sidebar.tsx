import { Home, Settings, CreditCard, Mail, Lock, Database, Terminal, Rocket } from 'lucide-react'
import { RainbowWrapper } from "./rainbow-wrapper"
import { useContext } from "react"
import { SidebarContext } from "./sidebar"
import { cn } from "../../lib/utils"

export function AppSidebar() {
  const context = useContext(SidebarContext)
  if (!context) throw new Error("AppSidebar must be used within SidebarProvider")
  
  return (
    <RainbowWrapper
      className="fixed inset-y-0 z-50 flex w-64 flex-col bg-white"
      wrapperClassName={cn(
        "transition-transform duration-300",
        context.isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center border-b px-6 pt-16">
        <img src="/Logo-Main.svg" alt="Logo" className="h-8 w-auto" />
      </div>
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Dashboard Section */}
        <ul className="space-y-2 font-medium px-3 py-4">
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Home className="w-5 h-5" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
        </ul>

        {/* General Section */}
        <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 px-3">
          <p className="px-2 text-sm font-semibold text-gray-400 uppercase">General</p>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5" />
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Configuration Section */}
        <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 px-3">
          <p className="px-2 text-sm font-semibold text-gray-400 uppercase">Configuration</p>
          <ul className="space-y-1">
            {[
              { icon: CreditCard, name: "Payment Setup" },
              { icon: Mail, name: "Email Config" },
              { icon: Lock, name: "Authentication" },
              { icon: Database, name: "Database" }
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <item.icon className="w-5 h-5" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Deployment Section */}
        <div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 px-3">
          <p className="px-2 text-sm font-semibold text-gray-400 uppercase">Deployment</p>
          <ul className="space-y-1">
            {[
              { icon: Terminal, name: "Environment" },
              { icon: Rocket, name: "Deploy" }
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <item.icon className="w-5 h-5" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RainbowWrapper>
  )
} 