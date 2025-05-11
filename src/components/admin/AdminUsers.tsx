
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Eye, Ban } from "lucide-react";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample user data
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "member", status: "active", joinDate: "2025-01-15", plan: "VIP" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "member", status: "active", joinDate: "2025-02-20", plan: "Pro" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "admin", status: "active", joinDate: "2024-11-05", plan: "VIP" },
    { id: 4, name: "Emily Wilson", email: "emily@example.com", role: "member", status: "inactive", joinDate: "2025-03-10", plan: "Free" },
    { id: 5, name: "Michael Brown", email: "michael@example.com", role: "member", status: "active", joinDate: "2025-04-25", plan: "Pro" },
  ];

  // Filter users based on search query
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get badge for user status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Get badge for subscription plan
  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "VIP":
        return <Badge variant="default" className="bg-purple-500">VIP</Badge>;
      case "Pro":
        return <Badge variant="default" className="bg-blue-500">Pro</Badge>;
      case "Free":
        return <Badge variant="outline">Free</Badge>;
      default:
        return <Badge variant="secondary">{plan}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground mt-1">
          Manage all users and their subscription plans
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role === "admin" ? <Badge className="bg-amber-500">Admin</Badge> : "Member"}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{getPlanBadge(user.plan)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" title="View User">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {user.status === "active" ? (
                        <Button variant="ghost" size="icon" title="Suspend User">
                          <Ban className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon" title="Activate User">
                          <Users className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-md p-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="font-semibold">Total Users</h2>
          </div>
          <p className="text-3xl font-bold mt-2">152</p>
          <p className="text-muted-foreground text-sm mt-1">+12 this month</p>
        </div>
        <div className="border rounded-md p-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="font-semibold">VIP Subscribers</h2>
          </div>
          <p className="text-3xl font-bold mt-2">37</p>
          <p className="text-muted-foreground text-sm mt-1">+5 this month</p>
        </div>
        <div className="border rounded-md p-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="font-semibold">Pro Subscribers</h2>
          </div>
          <p className="text-3xl font-bold mt-2">85</p>
          <p className="text-muted-foreground text-sm mt-1">+8 this month</p>
        </div>
        <div className="border rounded-md p-4">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            <h2 className="font-semibold">Free Users</h2>
          </div>
          <p className="text-3xl font-bold mt-2">30</p>
          <p className="text-muted-foreground text-sm mt-1">+15 this month</p>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
