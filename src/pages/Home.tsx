
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoAlert from "@/components/InfoAlert";
import RecentPredictions from "@/components/RecentPredictions";
import FreeTipsTable from "@/components/FreeTipsTable";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample data for FreeTipsTable
  const freeTips = [
    { id: 1, time: "15:00", league: "Premier League", fixture: "Arsenal vs Chelsea", tip: "Over 2.5" },
    { id: 2, time: "16:30", league: "La Liga", fixture: "Barcelona vs Real Madrid", tip: "BTTS" },
    { id: 3, time: "18:00", league: "Serie A", fixture: "Juventus vs Inter Milan", tip: "Home Win" },
    { id: 4, time: "19:45", league: "Bundesliga", fixture: "Bayern vs Dortmund", tip: "Away Win" },
    { id: 5, time: "21:00", league: "Ligue 1", fixture: "PSG vs Marseille", tip: "Draw" }
  ];

  // Sample data for RecentPredictions
  const recentPredictions = [
    { id: 1, date: "05/08/2025", league: "Premier League", fixture: "Man Utd vs Liverpool", prediction: "BTTS", result: "Win" },
    { id: 2, date: "05/07/2025", league: "La Liga", fixture: "Atletico vs Sevilla", prediction: "Under 2.5", result: "Loss" },
    { id: 3, date: "05/06/2025", league: "Serie A", fixture: "Milan vs Roma", prediction: "Home Win", result: "Win" },
    { id: 4, date: "05/05/2025", league: "Bundesliga", fixture: "Leipzig vs Leverkusen", prediction: "Away Win", result: "Win" },
    { id: 5, date: "05/04/2025", league: "Ligue 1", fixture: "Lyon vs Monaco", prediction: "Draw", result: "Loss" }
  ];

  return (
    <div className="container mx-auto py-8">
      <InfoAlert 
        message="Tips are sent instantly via SMS. If you haven't received a message find your tips HERE!" 
        className="mb-8"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Winning <span className="text-betblue">Football Predictions</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Access expert football tips, predictions, and in-depth analysis to improve your betting success.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/find-tip">
              <Button className="bg-betblue hover:bg-betblue-light">
                Find My Tip
              </Button>
            </Link>
            <Link to="/buy-tip">
              <Button variant="outline">
                Buy Premium Tips
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/8ad72381-bd76-45fb-a0a9-be3d31042c98.png" 
            alt="Soccer betting with money and stadium" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      <Tabs defaultValue="free" className="mb-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="free">Free Tips</TabsTrigger>
          <TabsTrigger value="recent">Recent Predictions</TabsTrigger>
        </TabsList>
        <TabsContent value="free" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <FreeTipsTable tips={freeTips} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <RecentPredictions predictions={recentPredictions} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Daily Predictions</h3>
            <p className="text-gray-600 mb-4">Get new tips every day with high win probability.</p>
            <Link to="/find-tip">
              <Button variant="outline" className="w-full">View Today's Tips</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">VIP Membership</h3>
            <p className="text-gray-600 mb-4">Unlock premium predictions with our VIP subscription plan.</p>
            <Link to="/vip-plan">
              <Button className="w-full bg-betblue hover:bg-betblue-light">Join VIP</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Jackpot Predictions</h3>
            <p className="text-gray-600 mb-4">Win big with our special jackpot prediction packages.</p>
            <Link to="/jackpot">
              <Button variant="outline" className="w-full">View Jackpots</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
