
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "FindMyTip", path: "/find-tip" },
    { label: "Rollover", path: "/rollover" },
    { label: "Pro Plan", path: "/pro-plan" },
    { label: "VIP Plan", path: "/vip-plan" },
    { label: "Jackpot", path: "/jackpot" }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-betblue">Bet</span>
            <span className="text-black">Predict</span>
          </span>
        </Link>
        
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button 
                className="p-2 text-gray-600 focus:outline-none" 
                aria-label="Menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[70vh] p-4">
              <div className="flex flex-col space-y-4 pt-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg px-4 py-3 text-gray-800 hover:text-betblue font-medium border-b border-gray-100"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-gray-800 hover:text-betblue font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
