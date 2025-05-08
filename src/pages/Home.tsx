
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeTipsTable from '@/components/FreeTipsTable';
import RecentPredictions from '@/components/RecentPredictions';
import InfoAlert from '@/components/InfoAlert';

const Home = () => {
  const [activeTab, setActiveTab] = useState('today');
  
  const freeTips = [
    { id: 1, time: '18:00', league: 'Erovnuli Liga', fixture: 'Fc Dinamo Tbilisi vs Telavi', tip: '1' },
    { id: 2, time: '20:30', league: 'Iraq, Stars League', fixture: 'Al Shorta vs Al Karkh', tip: '1' },
    { id: 3, time: '21:00', league: 'Faroe Islands, 1st delid', fixture: 'Skala If vs Ki Klaksvik Ii', tip: '1' },
  ];
  
  const recentPredictions = [
    { id: 1, date: '8/4', league: 'AUT', fixture: 'Gloggnitz vs Mauer', prediction: 'gg', result: '1:1' },
    { id: 2, date: '8/4', league: 'BUL', fixture: 'Pirin Blagoevgrad vs Ludogorets II', prediction: '1', result: '1:0' },
    { id: 3, date: '8/4', league: 'EST', fixture: 'Narva Trans vs Tallinna Kalev', prediction: '1', result: '1:0' },
    { id: 4, date: '8/4', league: 'EST', fixture: 'Tartu Tammeka vs Flora Tallinn', prediction: 'over 2.5', result: '1:2' },
    { id: 5, date: '8/4', league: 'KSA', fixture: 'Al-Batin vs Neom SC', prediction: '2', result: '2:7' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-betblue text-white py-2 text-center">
        <p>Tips are sent instantly via SMS. If you haven't received a message find your tips HERE!</p>
      </div>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-betgray py-14">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Bet Smarter. Win More. Elevate Your Game Every Day!</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Welcome to BetPredict – your ultimate destination for consistent and accurate daily predictions. 
                We provide expertly analyzed tips with high-value selections, multi-bets, and expert jackpot Predictions 
                to maximize your winnings.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Free Expert Tips</h2>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex mb-4 border-b">
                  <button 
                    onClick={() => setActiveTab('yesterday')}
                    className={`py-3 px-6 font-medium ${activeTab === 'yesterday' ? 'text-betblue border-b-2 border-betblue' : 'text-gray-500'}`}
                  >
                    Yesterday
                  </button>
                  <button 
                    onClick={() => setActiveTab('today')}
                    className={`py-3 px-6 font-medium ${activeTab === 'today' ? 'text-betblue border-b-2 border-betblue' : 'text-gray-500'}`}
                  >
                    Today
                  </button>
                  <button 
                    onClick={() => setActiveTab('tomorrow')}
                    className={`py-3 px-6 font-medium ${activeTab === 'tomorrow' ? 'text-betblue border-b-2 border-betblue' : 'text-gray-500'}`}
                  >
                    Tomorrow
                  </button>
                </div>
                
                <div className="p-4">
                  <FreeTipsTable tips={freeTips} />
                </div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto mb-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Recently Won Predictions</h2>
              <RecentPredictions predictions={recentPredictions} />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose BetPredict?</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-3">1. Expert Football Analysis</h3>
                <p className="text-gray-700">
                  Our team of football analysts and statisticians are passionate about the game. We dive deep into team form, 
                  player performance, head-to-head records, and tactical trends to provide you with predictions you can trust. From 
                  Arsenal's attacking prowess to Manchester United's defensive strategies, we analyze every detail to give you an 
                  edge in your betting journey.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-3">5. Trusted by Bettors Worldwide</h3>
                <p className="text-gray-700">
                  BetPredict has earned the trust of thousands of bettors across the globe. Our transparent approach, consistent 
                  results, and commitment to excellence have made us a go-to platform for football predictions. Join our community 
                  and experience the difference that expert insights can make.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg font-medium mb-4">Ready to elevate your betting experience?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/subscription-plans" 
                    className="bg-betblue text-white py-3 px-8 rounded-md font-bold hover:bg-betblue-light transition-colors"
                  >
                    View Premium Plans
                  </Link>
                  <Link 
                    to="/buy-tip" 
                    className="bg-white text-betblue border border-betblue py-3 px-8 rounded-md font-bold hover:bg-gray-50 transition-colors"
                  >
                    Buy Today's Tip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
