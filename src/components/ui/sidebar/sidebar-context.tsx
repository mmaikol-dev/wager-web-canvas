
import * as React from "react"

interface SidebarContextValue {
  state: "expanded" | "collapsed" | undefined
  setState: React.Dispatch<React.SetStateAction<"expanded" | "collapsed" | undefined>>
  openMobile: boolean
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>
  collapsedWidth: number
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  collapsedWidth?: number
  defaultCollapsed?: boolean
}

export function SidebarProvider({ 
  children, 
  collapsedWidth = 56, 
  defaultCollapsed = false 
}: SidebarProviderProps) {
  const [state, setState] = React.useState<"expanded" | "collapsed" | undefined>(
    defaultCollapsed ? "collapsed" : "expanded"
  )
  const [openMobile, setOpenMobile] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ state, setState, openMobile, setOpenMobile, collapsedWidth }}>
      {children}
    </SidebarContext.Provider>
  )
}
