"use client"

import { useState } from "react"
import { Eye, MoreHorizontal } from "lucide-react"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Order {
  id: string
  customer: string
  email: string
  phone: string
  items: { name: string; quantity: number; price: number }[]
  total: number
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled"
  paymentMethod: string
  date: string
  address: string
}

const initialOrders: Order[] = [
  {
    id: "ORD001",
    customer: "Ahmed Khan",
    email: "ahmed@example.com",
    phone: "0300-1234567",
    items: [
      { name: "Midnight Oud", quantity: 1, price: 12500 },
      { name: "Rose Elixir", quantity: 1, price: 9800 },
    ],
    total: 22300,
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    date: "2026-04-01",
    address: "123 Main Street, Karachi",
  },
  {
    id: "ORD002",
    customer: "Sara Ali",
    email: "sara@example.com",
    phone: "0321-9876543",
    items: [{ name: "Rose Elixir", quantity: 1, price: 9800 }],
    total: 9800,
    status: "Processing",
    paymentMethod: "JazzCash",
    date: "2026-04-02",
    address: "456 Garden Road, Lahore",
  },
  {
    id: "ORD003",
    customer: "Bilal Ahmed",
    email: "bilal@example.com",
    phone: "0333-5555555",
    items: [{ name: "Velvet Noir", quantity: 1, price: 15000 }],
    total: 15000,
    status: "Shipped",
    paymentMethod: "EasyPaisa",
    date: "2026-04-02",
    address: "789 Mall Road, Islamabad",
  },
  {
    id: "ORD004",
    customer: "Fatima Zahra",
    email: "fatima@example.com",
    phone: "0345-1111111",
    items: [{ name: "White Jasmine", quantity: 1, price: 8500 }],
    total: 8500,
    status: "Pending",
    paymentMethod: "Cash on Delivery",
    date: "2026-04-03",
    address: "321 Clifton, Karachi",
  },
  {
    id: "ORD005",
    customer: "Usman Malik",
    email: "usman@example.com",
    phone: "0312-2222222",
    items: [
      { name: "Velvet Noir", quantity: 1, price: 15000 },
      { name: "Golden Amber", quantity: 1, price: 11000 },
    ],
    total: 26000,
    status: "Delivered",
    paymentMethod: "JazzCash",
    date: "2026-03-28",
    address: "654 Model Town, Lahore",
  },
]

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [statusFilter, setStatusFilter] = useState<string>("All")

  const filteredOrders = statusFilter === "All"
    ? orders
    : orders.filter((order) => order.status === statusFilter)

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800"
      case "Shipped": return "bg-blue-100 text-blue-800"
      case "Processing": return "bg-yellow-100 text-yellow-800"
      case "Pending": return "bg-gray-100 text-gray-800"
      case "Cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl mb-2">Orders</h1>
          <p className="text-muted-foreground">View and manage customer orders</p>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Orders</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="Shipped">Shipped</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">
            {statusFilter === "All" ? "All Orders" : `${statusFilter} Orders`} ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Items</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Total</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Payment</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        {order.items.map((item, idx) => (
                          <p key={idx}>{item.name} x{item.quantity}</p>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm font-medium">{formatPrice(order.total)}</td>
                    <td className="py-3 px-4 text-sm">{order.paymentMethod}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                    <td className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Processing")}>
                            Mark Processing
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Shipped")}>
                            Mark Shipped
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Delivered")}>
                            Mark Delivered
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => updateOrderStatus(order.id, "Cancelled")}
                          >
                            Cancel Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No orders found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
