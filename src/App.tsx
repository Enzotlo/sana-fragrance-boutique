
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Caftans from "./pages/Caftans";
import RobesMarocaines from "./pages/RobesMarocaines";
import ModeHomme from "./pages/ModeHomme";
import SoinsBeaute from "./pages/SoinsBeaute";
import Parfums from "./pages/Parfums";
import Nouveautes from "./pages/Nouveautes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/caftans" element={<Caftans />} />
          <Route path="/robes-marocaines" element={<RobesMarocaines />} />
          <Route path="/mode-homme" element={<ModeHomme />} />
          <Route path="/soins-beaute" element={<SoinsBeaute />} />
          <Route path="/parfums" element={<Parfums />} />
          <Route path="/nouveautes" element={<Nouveautes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
