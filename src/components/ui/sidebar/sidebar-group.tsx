
import * as React from "react"
import { cn } from "@/lib/utils"

export const SidebarGroup = React.forwardRef<
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

export const SidebarGroupLabel = React.forwardRef<
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

export const SidebarGroupContent = React.forwardRef<
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
