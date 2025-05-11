
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminPayments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  
  // Mock data for payments
  const payments = [
    { 
      id: "TRX-38291", 
      customer: "John Doe", 
      amount: "KSh 50", 
      tipType: "Rollover",
      status: "completed", 
      date: "2023-05-12 14:32",
      phone: "+254712345678" 
    },
    { 
      id: "TRX-38290", 
      customer: "Jane Smith", 
      amount: "KSh 200", 
      tipType: "VIP Plan",
      status: "completed", 
      date: "2023-05-12 13:21",
      phone: "+254723456789" 
    },
    { 
      id: "TRX-38289", 
      customer: "Michael Johnson", 
      amount: "KSh 100", 
      tipType: "Pro Plan",
      status: "completed", 
      date: "2023-05-12 11:05",
      phone: "+254734567890" 
    },
    { 
      id: "TRX-38288", 
      customer: "Sarah Williams", 
      amount: "KSh 50", 
      tipType: "Rollover",
      status: "pending", 
      date: "2023-05-12 10:37",
      phone: "+254745678901" 
    },
    { 
      id: "TRX-38287", 
      customer: "David Brown", 
      amount: "KSh 50", 
      tipType: "Rollover",
      status: "failed", 
      date: "2023-05-12 09:15",
      phone: "+254756789012" 
    },
    { 
      id: "TRX-38286", 
      customer: "Emily Davis", 
      amount: "KSh 300", 
      tipType: "Jackpot",
      status: "completed", 
      date: "2023-05-11 16:48",
      phone: "+254767890123" 
    },
    { 
      id: "TRX-38285", 
      customer: "Robert Wilson", 
      amount: "KSh 200", 
      tipType: "VIP Plan",
      status: "completed", 
      date: "2023-05-11 15:22",
      phone: "+254778901234" 
    },
    { 
      id: "TRX-38284", 
      customer: "Jennifer Taylor", 
      amount: "KSh 100", 
      tipType: "Pro Plan",
      status: "refunded", 
      date: "2023-05-11 12:03",
      phone: "+254789012345" 
    },
  ];

  // Filter payments based on search query and selected period
  const filteredPayments = payments.filter(payment => 
    (payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.phone.includes(searchQuery)) &&
    (selectedPeriod === "all" || 
     (selectedPeriod === "today" && payment.date.includes("2023-05-12")) ||
     (selectedPeriod === "week" && true)) // Would normally check if within last 7 days
  );

  // Calculate total revenue
  const totalRevenue = payments
    .filter(p => p.status === "completed")
    .reduce((sum, payment) => {
      // Extract amount as number (removing currency symbol and converting to number)
      const amountValue = Number(payment.amount.replace(/[^0-9.-]+/g, ''));
      return sum + amountValue;
    }, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Payment Management</h1>
          <p className="text-muted-foreground">Track and manage tip purchases and payments</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="py-3">
            <p className="text-2xl font-bold">KSh {totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
          </CardHeader>
          <CardContent className="py-3">
            <p className="text-2xl font-bold">{payments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent className="py-3">
            <p className="text-2xl font-bold">
              {Math.round((payments.filter(p => p.status === "completed").length / payments.length) * 100)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer name, ID or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="failed">Failed/Refunded</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <TransactionsTable payments={filteredPayments} />
            </TabsContent>
            
            <TabsContent value="completed">
              <TransactionsTable payments={filteredPayments.filter(p => p.status === "completed")} />
            </TabsContent>
            
            <TabsContent value="pending">
              <TransactionsTable payments={filteredPayments.filter(p => p.status === "pending")} />
            </TabsContent>
            
            <TabsContent value="failed">
              <TransactionsTable 
                payments={filteredPayments.filter(p => ["failed", "refunded"].includes(p.status))} 
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const TransactionsTable = ({ payments }: { payments: any[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Tip Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>
              <div>
                <div>{payment.customer}</div>
                <div className="text-xs text-muted-foreground">{payment.phone}</div>
              </div>
            </TableCell>
            <TableCell>{payment.amount}</TableCell>
            <TableCell>{payment.tipType}</TableCell>
            <TableCell>
              <StatusBadge status={payment.status} />
            </TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {payments.length === 0 && (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
              No transactions found matching your criteria.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  let variant = "default";
  
  switch(status) {
    case "completed":
      variant = "green";
      break;
    case "pending":
      variant = "yellow";
      break;
    case "failed":
      variant = "red";
      break;
    case "refunded":
      variant = "purple";
      break;
    default:
      variant = "gray";
  }
  
  const variants = {
    green: "bg-green-100 text-green-800 hover:bg-green-100",
    yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    red: "bg-red-100 text-red-800 hover:bg-red-100",
    purple: "bg-purple-100 text-purple-800 hover:bg-purple-100",
    gray: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  };
  
  return (
    <Badge variant="outline" className={variants[variant as keyof typeof variants]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export default AdminPayments;
