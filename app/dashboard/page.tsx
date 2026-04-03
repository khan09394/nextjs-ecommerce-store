import { Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { products, formatPrice } from "@/lib/products"

const stats = [
  {
    name: "Total Products",
    value: products.length.toString(),
    icon: Package,
    change: "+2 this month",
  },
  {
    name: "Total Orders",
    value: "156",
    icon: ShoppingCart,
    change: "+12% from last month",
  },
  {
    name: "Revenue",
    value: formatPrice(2450000),
    icon: DollarSign,
    change: "+8% from last month",
  },
  {
    name: "Conversion Rate",
    value: "3.2%",
    icon: TrendingUp,
    change: "+0.5% from last month",
  },
]

const recentOrders = [
  { id: "ORD001", customer: "Ahmed Khan", total: 22300, status: "Delivered" },
  { id: "ORD002", customer: "Sara Ali", total: 9800, status: "Processing" },
  { id: "ORD003", customer: "Bilal Ahmed", total: 15000, status: "Shipped" },
  { id: "ORD004", customer: "Fatima Zahra", total: 8500, status: "Pending" },
  { id: "ORD005", customer: "Usman Malik", total: 26000, status: "Delivered" },
]

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Total</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                    <td className="py-3 px-4 text-sm">{order.customer}</td>
                    <td className="py-3 px-4 text-sm">{formatPrice(order.total)}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800" :
                        order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                        order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
