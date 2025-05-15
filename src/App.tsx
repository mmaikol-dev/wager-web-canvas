
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FindMyTip from "./pages/FindMyTip";
import BuyTip from "./pages/BuyTip";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import NotFound from "./pages/NotFound";
import Jackpot from "./pages/Jackpot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider, MobileSidebarTrigger } from "./components/ui/sidebar";
import AdminSidebar from "./components/admin/AdminSidebar";
import AdminOverview from "./components/admin/AdminOverview";
import AdminTips from "./components/admin/AdminTips";
import AdminPayments from "./components/admin/AdminPayments";
import AdminUsers from "./components/admin/AdminUsers";
import AdminSettings from "./components/admin/AdminSettings";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  
  return user ? <>{children}</> : <Navigate to="/login" />;
};

// Admin route component
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  // Here you would also check if user has admin role
  // For now we just check if user is authenticated
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-tip" element={<FindMyTip />} />
    <Route path="/buy-tip" element={<ProtectedRoute><BuyTip /></ProtectedRoute>} />
    <Route path="/subscription-plans" element={<ProtectedRoute><SubscriptionPlans /></ProtectedRoute>} />
    <Route path="/rollover" element={<SubscriptionPlans />} />
    <Route path="/pro-plan" element={<SubscriptionPlans />} />
    <Route path="/vip-plan" element={<SubscriptionPlans />} />
    <Route path="/jackpot" element={<Jackpot />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    
    {/* Admin Routes */}
    <Route path="/admin" element={
      <AdminRoute>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              <div className="md:hidden mb-4 flex justify-end">
                <MobileSidebarTrigger />
              </div>
              <AdminOverview />
            </main>
          </div>
        </SidebarProvider>
      </AdminRoute>
    } />
    <Route path="/admin/tips" element={
      <AdminRoute>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              <div className="md:hidden mb-4 flex justify-end">
                <MobileSidebarTrigger />
              </div>
              <AdminTips />
            </main>
          </div>
        </SidebarProvider>
      </AdminRoute>
    } />
    <Route path="/admin/payments" element={
      <AdminRoute>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              <div className="md:hidden mb-4 flex justify-end">
                <MobileSidebarTrigger />
              </div>
              <AdminPayments />
            </main>
          </div>
        </SidebarProvider>
      </AdminRoute>
    } />
    <Route path="/admin/users" element={
      <AdminRoute>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              <div className="md:hidden mb-4 flex justify-end">
                <MobileSidebarTrigger />
              </div>
              <AdminUsers />
            </main>
          </div>
        </SidebarProvider>
      </AdminRoute>
    } />
    <Route path="/admin/settings" element={
      <AdminRoute>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              <div className="md:hidden mb-4 flex justify-end">
                <MobileSidebarTrigger />
              </div>
              <AdminSettings />
            </main>
          </div>
        </SidebarProvider>
      </AdminRoute>
    } />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
