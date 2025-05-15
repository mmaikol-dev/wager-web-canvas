
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AddTipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTipAdded: () => void;
}

const AddTipModal = ({ open, onOpenChange, onTipAdded }: AddTipModalProps) => {
  const [title, setTitle] = useState("");
  const [prediction, setPrediction] = useState("");
  const [odds, setOdds] = useState("");
  const [status, setStatus] = useState("active");
  const [eventDate, setEventDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !prediction || !odds || !eventDate) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("betting_tips").insert([
        {
          title,
          prediction,
          odds: parseFloat(odds),
          status,
          event_date: new Date(eventDate).toISOString(),
        },
      ]);

      if (error) throw error;
      
      toast({
        title: "Success!",
        description: "Tip has been added successfully.",
      });
      
      // Reset form
      setTitle("");
      setPrediction("");
      setOdds("");
      setStatus("active");
      setEventDate("");
      onTipAdded();
      onOpenChange(false);
      
    } catch (error: any) {
      toast({
        title: "Error adding tip",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Betting Tip</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Match/Event Title</Label>
            <Input 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Chelsea vs Manchester United"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prediction">Prediction</Label>
            <Input 
              id="prediction" 
              value={prediction} 
              onChange={(e) => setPrediction(e.target.value)}
              placeholder="e.g. Over 2.5 Goals"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="odds">Odds</Label>
            <Input 
              id="odds" 
              type="number" 
              step="0.01" 
              min="1" 
              value={odds} 
              onChange={(e) => setOdds(e.target.value)}
              placeholder="e.g. 1.85"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventDate">Event Date</Label>
            <Input 
              id="eventDate" 
              type="datetime-local" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Tip"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTipModal;
