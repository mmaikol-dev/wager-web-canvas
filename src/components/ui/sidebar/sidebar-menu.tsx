
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const SidebarMenu = React.forwardRef<
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

export const SidebarMenuItem = React.forwardRef<
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuButtonVariants> {
  asChild?: boolean
  active?: boolean
  tooltip?: string
  isActive?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, active, tooltip, asChild = false, isActive = false, ...props }, ref) => {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    
    if (asChild) {
      const { ref: _, ...restProps } = props as any;
      return (
        <div
          data-active={isActive || active || undefined}
          className={cn(menuButtonVariants({ variant }), className)}
          data-tooltip={isCollapsed ? tooltip : undefined}
          data-tooltip-position="right"
          {...restProps}
        />
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        data-active={isActive || active || undefined}
        className={cn(menuButtonVariants({ variant }), className)}
        data-tooltip={isCollapsed ? tooltip : undefined}
        data-tooltip-position="right"
        {...props}
      />
    );
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"
