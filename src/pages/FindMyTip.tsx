
import { useState } from 'react';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/sonner';

const FindMyTip = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionCode, setTransactionCode] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !transactionCode) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // This would normally fetch data from an API
    toast.success("Looking for your tip...");
    // Simulating API call delay
    setTimeout(() => {
      toast.info("No tips found for this transaction. Please check your details.");
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-betgray">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">Find My Tip</h1>
              <p className="text-gray-600 mb-6">Enter your details to get your recently bought tip</p>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4">Enter Transaction Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 text-gray-700">Phone</label>
                    <input 
                      type="text" 
                      id="phone" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-betblue focus:outline-none"
                      placeholder="+254 or 254 or 07"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="transaction" className="block mb-2 text-gray-700">Mpesa Transaction | Mpesa Transaction Code</label>
                    <input 
                      type="text" 
                      id="transaction" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-betblue focus:outline-none"
                      value={transactionCode}
                      onChange={(e) => setTransactionCode(e.target.value)}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-betblue text-white font-semibold rounded-md hover:bg-betblue-light transition-colors"
                  >
                    Find My Tip
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

export default FindMyTip;
