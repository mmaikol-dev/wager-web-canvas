
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-tip" element={<FindMyTip />} />
          <Route path="/buy-tip" element={<BuyTip />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/rollover" element={<SubscriptionPlans />} />
          <Route path="/pro-plan" element={<SubscriptionPlans />} />
          <Route path="/vip-plan" element={<SubscriptionPlans />} />
          <Route path="/jackpot" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
