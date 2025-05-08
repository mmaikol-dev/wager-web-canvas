
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingPlan from '@/components/PricingPlan';

const SubscriptionPlans = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-betgray">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Premium Tips</h1>
          
          <div className="max-w-3xl mx-auto">
            <PricingPlan
              title="Rollover"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 7L17 8L16 7V4H8V7L7 8L6 7V3C6 2.44772 6.44772 2 7 2H17C17.5523 2 18 2.44772 18 3V7ZM18 9.82843L16 11.8284L14.5858 10.4142L13.1716 11.8284L16.0001 14.6569L19.4143 11.2426L18.0001 9.82843H18ZM9.41421 13.4142L6 16.8284L7.41421 18.2426L10.8284 14.8284L9.41421 13.4142ZM17 20H7C6.44772 20 6 19.5523 6 19V16L7 15L8 16V19H16V16L17 15L18 16V19C18 19.5523 17.5523 20 17 20Z"></path>
                </svg>
              }
              description="Get sure 3-5 odds daily and earn consistently. This plan is perfect for those looking for steady and consistent returns. Once you purchase, your tips will be sent instantly via SMS."
              price="BUY @KSH. 50"
              rating={5}
              buyLink="/buy-tip"
            />
            
            <PricingPlan
              title="Pro Plan"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.3356 3.81334C15.5393 3.45293 16.0301 3.39642 16.3024 3.70072L21.1667 9.11389C21.3437 9.31375 21.3731 9.60527 21.2394 9.83755L15.8293 19.9348C15.6532 20.241 15.243 20.3217 14.9586 20.1164V20.1164C14.6773 19.9133 14.5982 19.5106 14.7911 19.2211L19.7466 10.7014L15.74 6.21082L12.5477 12.1839C12.3615 12.5143 11.9287 12.6142 11.627 12.3854C11.3212 12.1537 11.25 11.7131 11.4678 11.3883L14.6239 6.49408L11.5352 3L7.45302 10.5197C7.28069 10.8312 6.87907 10.9283 6.5847 10.7219C6.32375 10.5392 6.25265 10.1908 6.41515 9.93209L11.0281 2.13595C11.2286 1.78489 11.7129 1.73105 11.9828 2.02798L15.3356 3.81334ZM5.97621 12.8659L9.06134 19.3422C9.20346 19.6267 9.0707 19.9656 8.78622 20.1077V20.1077C8.48938 20.2571 8.13303 20.1178 8.00061 19.8126L4.9249 13.3558C4.78278 13.0712 4.91554 12.7324 5.20002 12.5903V12.5903C5.49687 12.4409 5.85321 12.5802 5.98564 12.8854L5.97621 12.8659ZM3.34395 14.0235L5.08107 18.486C5.22319 18.7705 5.09043 19.1094 4.80595 19.2515V19.2515C4.50911 19.4009 4.15277 19.2616 4.02034 18.9564L2.29264 14.5229C2.15052 14.2384 2.28328 13.8995 2.56776 13.7574V13.7574C2.86461 13.608 3.22095 13.7473 3.35337 14.0525L3.34395 14.0235Z"></path>
                </svg>
              }
              description="Receive 5-7 premium odds daily, carefully analyzed to maximize your returns. If you're looking for bigger odds and bigger profits, this plan is for you! Tips are sent instantly via SMS."
              price="BUY @KSH. 70"
              rating={4.5}
              buyLink="/buy-tip"
            />
            
            <PricingPlan
              title="VIP Plan"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 7L8.5 3H15.5L19.5 7L12 21L4.5 7ZM13.764 5H10.236L8.236 7H15.764L13.764 5Z"></path>
                </svg>
              }
              description="Get sure 8-15 odds daily and earn consistently. Ideal for serious bettors aiming for bigger profits. Your tips are sent instantly via SMS upon purchase."
              price="BUY @KSH. 100"
              rating={4}
              buyLink="/buy-tip"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscriptionPlans;
