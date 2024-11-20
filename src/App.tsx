import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Houtwerk from "./pages/Houtwerk";
import Moduler from "./pages/Moduler";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import PreOrderBanner from "./components/PreOrderBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen pb-[88px] sm:pb-[76px]">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/houtwerk" element={<Houtwerk />} />
              <Route path="/moduler" element={<Moduler />} />
              <Route path="/order" element={<OrderForm />} />
            </Routes>
          </main>
          <Footer />
          <PreOrderBanner />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;