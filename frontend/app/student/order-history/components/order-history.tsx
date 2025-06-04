 "use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CreditCard, Download, FileText } from "lucide-react"

// Define order status types
type OrderStatus = "In Progress" | "Completed" | "Cancelled"

// Define order data structure
interface Order {
  id: string
  status: OrderStatus
  price: number
  purchasedDate: string
  paymentMethod: "Credit Card" | "Paypal"
}

// Sample order data
const orders: Order[] = [
  {
    id: "ORD-2024-001",
    status: "In Progress",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  { id: "ORD-2024-001", status: "Completed", price: 99.99, purchasedDate: "Jan 15, 2024", paymentMethod: "Paypal" },
  {
    id: "ORD-2024-001",
    status: "Cancelled",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2024-001",
    status: "Completed",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2024-001",
    status: "Completed",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2024-001",
    status: "Completed",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2024-001",
    status: "Completed",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2024-001",
    status: "Completed",
    price: 99.99,
    purchasedDate: "Jan 15, 2024",
    paymentMethod: "Credit Card",
  },
]

export default function OrderHistory() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  // Handle checkbox selection
  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders((prev) => (prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]))
  }

  // Handle select all checkbox
  const toggleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([])
    } else {
      setSelectedOrders(orders.map((order) => order.id))
    }
  }

  // Get status color based on status
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "In Progress":
        return "text-amber-500"
      case "Completed":
        return "text-green-500"
      case "Cancelled":
        return "text-red-500"
      default:
        return ""
    }
  }

  // Get status dot color based on status
  const getStatusDot = (status: OrderStatus) => {
    switch (status) {
      case "In Progress":
        return "bg-amber-500"
      case "Completed":
        return "bg-green-500"
      case "Cancelled":
        return "bg-red-500"
      default:
        return ""
    }
  }

  // Get payment method icon
  const getPaymentIcon = (method: "Credit Card" | "Paypal") => {
    if (method === "Credit Card") {
      return <CreditCard className="h-5 w-5 text-gray-500" />
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-gray-500"
        >
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <rect width="18" height="12" x="3" y="11" rx="2" />
        </svg>
      )
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Order History</h1>
          <p className="text-gray-500 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download All</span>
        </Button>
      </div>

      <div className="flex justify-between items-center my-6 gap-4">
        <div className="flex gap-4">
          <div className="relative">
            <Select>
              <SelectTrigger className="w-[180px] pl-9 bg-white">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>

          <div className="relative">
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <Input type="text" placeholder="Search" className="pl-10 bg-white" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-white border-b">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedOrders.length === orders.length && orders.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price & Purchased On</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} className="bg-white">
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={() => toggleOrderSelection(order.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${getStatusDot(order.status)}`} />
                    <span className={getStatusColor(order.status)}>{order.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">${order.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">Purchased {order.purchasedDate}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getPaymentIcon(order.paymentMethod)}
                    <span className="text-gray-600">{order.paymentMethod}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                      <FileText className="h-4 w-4" />
                      <span>Invoice</span>
                    </Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                      View Course
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
