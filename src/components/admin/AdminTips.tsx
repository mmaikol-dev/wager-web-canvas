
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Plus, Edit, Trash } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import AddTipModal from "./AddTipModal";

interface Tip {
  id: string;
  title: string;
  prediction: string;
  odds: number;
  status: string;
  event_date: string;
}

const AdminTips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tips, setTips] = useState<Tip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("betting_tips")
        .select("*")
        .order("event_date", { ascending: false });

      if (error) throw error;
      
      setTips(data || []);
    } catch (error: any) {
      console.error("Error fetching tips:", error);
      toast({
        title: "Failed to load tips",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Filter tips based on search query
  const filteredTips = tips.filter(tip => 
    tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tip.prediction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete a tip
  const deleteTip = async (id: string) => {
    if (!confirm("Are you sure you want to delete this tip?")) return;
    
    try {
      const { error } = await supabase
        .from("betting_tips")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Tip deleted successfully",
      });
      
      // Refresh tips list
      fetchTips();
    } catch (error: any) {
      toast({
        title: "Error deleting tip",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
        <Button className="sm:self-end" onClick={() => setIsAddModalOpen(true)}>
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
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    Loading tips...
                  </TableCell>
                </TableRow>
              ) : filteredTips.length > 0 ? (
                filteredTips.map((tip) => (
                  <TableRow key={tip.id}>
                    <TableCell className="font-medium truncate max-w-[180px]" title={tip.title}>
                      {tip.title}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{tip.prediction}</TableCell>
                    <TableCell>{tip.odds}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {formatDate(tip.event_date)}
                    </TableCell>
                    <TableCell>{getStatusBadge(tip.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" title="Delete" className="h-8 w-8"
                               onClick={() => deleteTip(tip.id)}>
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
            <p className="text-2xl font-bold mt-1">
              {tips.filter(tip => tip.status === "active").length}
            </p>
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

      <AddTipModal 
        open={isAddModalOpen} 
        onOpenChange={setIsAddModalOpen}
        onTipAdded={fetchTips}
      />
    </div>
  );
};

export default AdminTips;
