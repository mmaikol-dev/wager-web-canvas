
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"

interface SidebarContextValue {
  state: "expanded" | "collapsed" | undefined
  setState: React.Dispatch<React.SetStateAction<"expanded" | "collapsed" | undefined>>
  openMobile: boolean
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>
  collapsedWidth: number
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

function useSidebar() {
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

function SidebarProvider({ 
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

const sidebarVariants = cva(
  "flex flex-col gap-2 overflow-hidden h-full",
  {
    variants: {
      variant: {
        default: "",
        inset: "px-2 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: boolean | "icon"
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, collapsible, ...props }, ref) => {
    const { state, setState, openMobile, setOpenMobile, collapsedWidth } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
      <>
        <aside
          ref={ref}
          data-state={state}
          className={cn(sidebarVariants({ variant }), "hidden md:flex", className)}
          style={
            isCollapsed && collapsible ? { width: collapsedWidth } : {}
          }
          {...props}
        />
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent side="left" className="flex flex-col gap-2 p-2 pt-10">
            <div className={cn(sidebarVariants({ variant }), className)} {...props} />
          </SheetContent>
        </Sheet>
      </>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { state, setState } = useSidebar()

  return (
    <button
      ref={ref}
      onClick={() =>
        setState((prev) =>
          prev === "expanded" ? "collapsed" : "expanded"
        )
      }
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <ChevronLeft
        className={cn(
          "h-4 w-4 transition-transform",
          state === "collapsed" && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-1 flex-col gap-2 overflow-hidden", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    open?: boolean 
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ className, open, defaultOpen = false, onOpenChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  
  const handleOpenChange = React.useCallback((value: boolean) => {
    setIsOpen(value)
    onOpenChange?.(value)
  }, [onOpenChange])

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-6 items-center text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "space-y-0.5",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1",
        className
      )}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn("list-none", className)}
      {...props}
    />
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const menuButtonVariants = cva(
  "flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus-visible:bg-accent focus-visible:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-transparent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarMenuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuButtonVariants> {
  asChild?: boolean
  active?: boolean
  tooltip?: string
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, active, tooltip, asChild = false, isActive = false, ...props }, ref) => {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    const Comp = asChild ? React.Fragment : "button"
    const finalProps = asChild ? props : { ...props, ref, type: "button" }

    return (
      <Comp
        data-active={isActive || active || undefined}
        className={cn(menuButtonVariants({ variant }), className)}
        data-tooltip={isCollapsed ? tooltip : undefined}
        data-tooltip-position="right"
        {...finalProps}
      />
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export {
  useSidebar,
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
}
