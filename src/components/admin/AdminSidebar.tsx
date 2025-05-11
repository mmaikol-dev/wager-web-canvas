
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronRight,
  CreditCard,
} from "lucide-react";

const AdminSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Tips Management",
      icon: FileText,
      path: "/admin/tips",
    },
    {
      title: "Payments",
      icon: CreditCard,
      path: "/admin/payments",
    },
    {
      title: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    }
  ];

  // Helper to check if the route is active
  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };

  // Ensure the group containing the active route stays expanded
  const isGroupExpanded = sidebarItems.some(item => isActive(item.path));

  return (
    <Sidebar collapsible="icon" variant="inset" className="border-r">
      {/* Trigger visible in collapsed state */}
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup defaultOpen={isGroupExpanded}>
          <SidebarGroupLabel>
            Admin Dashboard
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    isActive={isActive(item.path)}
                    tooltip={collapsed ? item.title : undefined}
                    asChild
                  >
                    <Link to={item.path} className="flex items-center w-full">
                      <item.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{item.title}</span>
                      {!collapsed && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
