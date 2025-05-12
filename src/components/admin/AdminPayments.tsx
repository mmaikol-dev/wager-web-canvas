
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminPayments = () => {
  // Dummy payment data
  const recentPayments = [
    { id: "PAY-1234", date: "2025-05-10", amount: 4599, user: "john_doe", status: "completed", type: "Tip Purchase" },
    { id: "PAY-1235", date: "2025-05-09", amount: 2999, user: "emma_wilson", status: "completed", type: "Subscription" },
    { id: "PAY-1236", date: "2025-05-08", amount: 1999, user: "mike_brown", status: "pending", type: "Tip Purchase" },
    { id: "PAY-1237", date: "2025-05-07", amount: 9999, user: "sara_jones", status: "completed", type: "VIP Package" },
    { id: "PAY-1238", date: "2025-05-06", amount: 1099, user: "robert_smith", status: "failed", type: "Tip Purchase" },
  ];

  // Get badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-green-500">Completed</Badge>;
      case "pending":
        return <Badge variant="outline" className="border-amber-500 text-amber-500">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Format amount to KSH
  const formatCurrency = (amount: number) => {
    return `KSH ${(amount / 100).toLocaleString("en-KE")}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage transaction history and payment analytics</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KSH 125,480.00</div>
            <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tips Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">287</div>
            <p className="text-xs text-muted-foreground mt-1">+7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">152</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-md border">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <p className="text-sm text-muted-foreground">Track the latest payments and subscriptions</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-3 px-4 text-left text-sm font-medium">Transaction ID</th>
                <th className="py-3 px-4 text-left text-sm font-medium">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium">Amount</th>
                <th className="py-3 px-4 text-left text-sm font-medium">User</th>
                <th className="py-3 px-4 text-left text-sm font-medium hidden md:table-cell">Type</th>
                <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm">{payment.id}</td>
                  <td className="py-3 px-4 text-sm">{payment.date}</td>
                  <td className="py-3 px-4 text-sm">{formatCurrency(payment.amount)}</td>
                  <td className="py-3 px-4 text-sm">{payment.user}</td>
                  <td className="py-3 px-4 text-sm hidden md:table-cell">{payment.type}</td>
                  <td className="py-3 px-4 text-sm">{getStatusBadge(payment.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
