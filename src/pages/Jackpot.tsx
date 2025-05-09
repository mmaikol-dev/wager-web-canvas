
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, DiamondPlus } from "lucide-react";

const Jackpot = () => {
  const jackpotData = [
    {
      id: 1,
      league: "Premier League",
      match: "Arsenal vs Manchester City",
      odds: 5.25,
      jackpotAmount: "KSh 25,000",
      date: "May 9, 2025"
    },
    {
      id: 2,
      league: "La Liga",
      match: "Barcelona vs Real Madrid",
      odds: 4.75,
      jackpotAmount: "KSh 20,000",
      date: "May 12, 2025"
    },
    {
      id: 3,
      league: "Bundesliga",
      match: "Bayern Munich vs Borussia Dortmund",
      odds: 3.85,
      jackpotAmount: "KSh 15,000",
      date: "May 15, 2025"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-betblue">BetPredict</span> Jackpot
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Play our jackpot games for a chance to win massive prizes. Select the correct outcomes and win big!
        </p>
      </div>

      <div className="bg-gradient-to-r from-betblue to-betblue-light p-6 rounded-lg shadow-lg mb-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold flex items-center">
              <Trophy className="mr-2" size={28} /> Weekly Mega Jackpot
            </h2>
            <p className="opacity-90">Predict 10 matches correctly to win</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold mb-1">KSh 100,000</div>
            <Badge className="bg-white text-betblue">Closing Soon</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {jackpotData.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-betgray p-4">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="bg-white">
                  {item.league}
                </Badge>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="font-semibold text-lg mt-2">{item.match}</h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <Star className="text-betblue mr-1" size={16} />
                  <span className="text-sm">Top Pick</span>
                </div>
                <div className="text-betblue font-semibold">Odds: {item.odds}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DiamondPlus className="text-betblue mr-1" size={16} />
                  <span className="text-sm font-medium">Jackpot Amount</span>
                </div>
                <div className="font-bold">{item.jackpotAmount}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-betgray rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-center">How to Play</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-betblue text-white font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Select Your Matches</h4>
            <p className="text-sm text-gray-600">Choose from our selection of premium matches</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-betblue text-white font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Place Your Bet</h4>
            <p className="text-sm text-gray-600">Stake your bet and confirm your selections</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-betblue text-white font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Win Big</h4>
            <p className="text-sm text-gray-600">Predict correctly and claim your jackpot prize</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jackpot;
