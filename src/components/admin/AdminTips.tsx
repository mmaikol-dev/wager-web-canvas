
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Plus, Edit, Trash } from "lucide-react";

const AdminTips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample tip data
  const tips = [
    { id: 1, title: "Chelsea vs Manchester United", prediction: "Over 2.5 Goals", odds: 1.85, status: "active", date: "2025-05-11" },
    { id: 2, title: "Arsenal vs Liverpool", prediction: "Home Win", odds: 2.10, status: "active", date: "2025-05-12" },
    { id: 3, title: "Barcelona vs Real Madrid", prediction: "Away Win", odds: 2.45, status: "pending", date: "2025-05-13" },
    { id: 4, title: "Bayern Munich vs Dortmund", prediction: "Both Teams to Score", odds: 1.65, status: "completed", date: "2025-05-09" },
    { id: 5, title: "PSG vs Lyon", prediction: "Draw", odds: 3.50, status: "completed", date: "2025-05-08" },
  ];

  // Filter tips based on search query
  const filteredTips = tips.filter(tip => 
    tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tip.prediction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case "pending":
        return <Badge variant="outline" className="border-amber-500 text-amber-500">Pending</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tips Management</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage all betting tips on the platform
          </p>
        </div>
        <Button className="sm:self-end">
          <Plus className="mr-2 h-4 w-4" /> Add New Tip
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tips..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px] min-w-[180px]">Title</TableHead>
                <TableHead className="hidden md:table-cell">Prediction</TableHead>
                <TableHead>Odds</TableHead>
                <TableHead className="hidden sm:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTips.length > 0 ? (
                filteredTips.map((tip) => (
                  <TableRow key={tip.id}>
                    <TableCell className="font-medium truncate max-w-[180px]" title={tip.title}>{tip.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{tip.prediction}</TableCell>
                    <TableCell>{tip.odds}</TableCell>
                    <TableCell className="hidden sm:table-cell">{tip.date}</TableCell>
                    <TableCell>{getStatusBadge(tip.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" title="Edit" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Delete" className="h-8 w-8">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No tips found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" /> Tip Performance Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-muted/50 rounded-md p-4 text-center">
            <p className="text-muted-foreground text-sm">Active Tips</p>
            <p className="text-2xl font-bold mt-1">2</p>
          </div>
          <div className="bg-muted/50 rounded-md p-4 text-center">
            <p className="text-muted-foreground text-sm">Win Rate</p>
            <p className="text-2xl font-bold mt-1">68%</p>
          </div>
          <div className="bg-muted/50 rounded-md p-4 text-center">
            <p className="text-muted-foreground text-sm">Tips Sold</p>
            <p className="text-2xl font-bold mt-1">287</p>
          </div>
          <div className="bg-muted/50 rounded-md p-4 text-center">
            <p className="text-muted-foreground text-sm">Revenue</p>
            <p className="text-2xl font-bold mt-1">KSH 458,200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTips;
