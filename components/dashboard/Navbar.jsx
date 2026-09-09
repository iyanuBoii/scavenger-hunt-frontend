// "use client"

// import { Bell, Sun, User } from "lucide-react"
// import Image from "next/image"

// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-30 flex items-center justify-between py-4 px-4 md:px-6">
//       {/* Left side - visible only on mobile */}
   
//         <Image src={'/images/logo.png'} alt="dp" height={100} width={100} priority className="w-36" />
  
//       {/* Right side - actions */}
//       <div className="ml-auto flex items-center gap-4">
//         {/* Theme toggle */}
//         <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-primary-foreground hover:bg-muted/80 transition-colors">
//           <Sun className="h-5 w-5" />
//         </button>

//         {/* Notifications */}
//         <div className="relative hidden md:block">
//           <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-primary-foreground hover:bg-muted/80 transition-colors">
//             <Bell className="h-5 w-5" />
//           </button>
//           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold">
//             4
//           </span>
//         </div>

//         {/* User profile */}
//         <div className="flex items-center md:ml-10 gap-2">
//           <span className="hidden md:inline-block text-sm text-white font-medium">Jendor Glowe</span>
//           <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
//             <Image src={'/images/Dp.png'} alt="dp" height={100} width={100} priority />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client"

import { useState } from "react"
import { Bell, Sun, User, Menu, X } from "lucide-react"
import Image from "next/image"
import { Sidebar } from "./Sidebar" // Ensure Sidebar is imported
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Mobile Sidebar */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
      
      <header className="sticky top-0 z-30 flex items-center justify-between py-4 px-4 md:px-6">
        {/* Left side - visible only on mobile */}
        <div className="flex items-center gap-4">
          
          
          <Image src={'/images/logo.png'} alt="dp" height={100} width={100} priority className="w-36" />
        </div>

        {/* Right side - actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* Theme toggle */}
          <button aria-label="Toggle theme" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-primary-foreground hover:bg-muted/80 transition-colors">
            <Sun className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <div className="relative hidden md:block">
            <button aria-label="View notifications" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-primary-foreground hover:bg-muted/80 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold">
              4
            </span>
          </div>

          {/* User profile */}
          <div className="md:flex items-center hidden md:ml-10 gap-2">
            <span className="hidden md:inline-block text-sm text-white font-medium">Jendor Glowe</span>
            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
              <Image src={'/images/Dp.png'} alt="dp" height={100} width={100} priority />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center  p-2 rounded-lg hover:bg-muted transition"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </header>
    </>
  )
}


