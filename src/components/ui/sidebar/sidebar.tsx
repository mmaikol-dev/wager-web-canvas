
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
import { ChevronLeft } from "lucide-react"

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

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
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

export const SidebarTrigger = React.forwardRef<
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

export const SidebarContent = React.forwardRef<
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
