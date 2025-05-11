
import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminOverview from "@/components/admin/AdminOverview";
import AdminTips from "@/components/admin/AdminTips";
import AdminPayments from "@/components/admin/AdminPayments";
import AdminUsers from "@/components/admin/AdminUsers";
import AdminSettings from "@/components/admin/AdminSettings";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const AdminDashboard = () => {
  const [isAuthenticated] = useState(true); // Replace with actual auth check
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="md:hidden mb-4">
            <MobileNavTrigger />
          </div>
          <Routes>
            <Route index element={<AdminOverview />} />
            <Route path="tips" element={<AdminTips />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};

const MobileNavTrigger = () => {
  const { setOpenMobile } = useSidebar();
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => setOpenMobile(true)}
      className="flex items-center gap-2"
    >
      <Menu size={18} />
      <span>Menu</span>
    </Button>
  );
};

export default AdminDashboard;
