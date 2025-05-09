
import { useState } from 'react';
import Footer from '@/components/Footer';
import InfoAlert from '@/components/InfoAlert';
import MatchesList from '@/components/MatchesList';
import { toast } from '@/components/ui/sonner';

const BuyTip = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const matches = [
    { id: 1, fixture: "Manchester United vs Athletic Bilbao", time: "22:00" },
    { id: 2, fixture: "Chelsea vs Djurgardens If", time: "22:00" },
    { id: 3, fixture: "Bodoe/glimt vs Tottenham", time: "22:00" },
    { id: 4, fixture: "Havadar Sc vs Sepahan Sc", time: "19:00" },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      toast.error("Please enter your M-Pesa phone number");
      return;
    }
    
    toast.success("Processing payment request...");
    // Simulating payment process
    setTimeout(() => {
      toast.info("Payment request sent to your phone. Please complete the transaction.");
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-betgray">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">Buy Tip</h1>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Active Tips</h2>
                <span className="bg-betblue text-white text-sm font-medium py-1 px-4 rounded">Rollover</span>
              </div>
              
              <MatchesList matches={matches} />
              
              <InfoAlert message="Enter your M-pesa number below then click 'BUY'. You will be prompted to enter your M-pesa PIN. Kindly enter your M-pesa PIN to authorize the transaction. Tips are sent instantly via SMS." className="mb-6" />
              
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4">M-Pesa Payment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-gray-700">Phone</label>
                    <input 
                      type="text" 
                      id="phone" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-betblue focus:outline-none"
                      placeholder="Enter your M-pesa number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="py-3 px-6 bg-betblue text-white font-semibold rounded-md hover:bg-betblue-light transition-colors"
                  >
                    Buy @KSH. 50
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyTip;
