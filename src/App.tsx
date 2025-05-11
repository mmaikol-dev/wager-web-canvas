
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-tip" element={<FindMyTip />} />
              <Route path="/buy-tip" element={<BuyTip />} />
              <Route path="/subscription-plans" element={<SubscriptionPlans />} />
              <Route path="/rollover" element={<SubscriptionPlans />} />
              <Route path="/pro-plan" element={<SubscriptionPlans />} />
              <Route path="/vip-plan" element={<SubscriptionPlans />} />
              <Route path="/jackpot" element={<Jackpot />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <SidebarProvider>
                  <div className="flex min-h-screen">
                    <AdminSidebar />
                    <main className="flex-1 p-6">
                      <div className="md:hidden mb-4">
                        <MobileSidebarTrigger />
                      </div>
                      <AdminOverview />
                    </main>
                  </div>
                </SidebarProvider>
              } />
              <Route path="/admin/tips" element={
                <SidebarProvider>
                  <div className="flex min-h-screen">
                    <AdminSidebar />
                    <main className="flex-1 p-6">
                      <div className="md:hidden mb-4">
                        <MobileSidebarTrigger />
                      </div>
                      <AdminTips />
                    </main>
                  </div>
                </SidebarProvider>
              } />
              <Route path="/admin/payments" element={
                <SidebarProvider>
                  <div className="flex min-h-screen">
                    <AdminSidebar />
                    <main className="flex-1 p-6">
                      <div className="md:hidden mb-4">
                        <MobileSidebarTrigger />
                      </div>
                      <AdminPayments />
                    </main>
                  </div>
                </SidebarProvider>
              } />
              <Route path="/admin/users" element={
                <SidebarProvider>
                  <div className="flex min-h-screen">
                    <AdminSidebar />
                    <main className="flex-1 p-6">
                      <div className="md:hidden mb-4">
                        <MobileSidebarTrigger />
                      </div>
                      <AdminUsers />
                    </main>
                  </div>
                </SidebarProvider>
              } />
              <Route path="/admin/settings" element={
                <SidebarProvider>
                  <div className="flex min-h-screen">
                    <AdminSidebar />
                    <main className="flex-1 p-6">
                      <div className="md:hidden mb-4">
                        <MobileSidebarTrigger />
                      </div>
                      <AdminSettings />
                    </main>
                  </div>
                </SidebarProvider>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
