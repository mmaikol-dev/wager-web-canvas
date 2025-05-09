
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoAlert from "@/components/InfoAlert";
import RecentPredictions from "@/components/RecentPredictions";
import FreeTipsTable from "@/components/FreeTipsTable";
import { Link } from "react-router-dom";

const Home = () => {
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
            src="/lovable-uploads/b876758e-e936-4334-b4a1-6546e0f5d090.png" 
            alt="BetPredict Football Tips" 
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
              <FreeTipsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <RecentPredictions />
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
