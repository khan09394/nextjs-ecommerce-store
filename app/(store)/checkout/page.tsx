"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, Upload, Smartphone, Copy, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [copied, setCopied] = useState(false)

  const accountNumber = "03164722574"

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0])
    }
  }

  const shippingCost = totalPrice > 5000 ? 0 : 250
  const grandTotal = totalPrice + shippingCost

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setOrderPlaced(true)
    clearCart()
    setIsSubmitting(false)
  }

  if (orderPlaced) {
    return (
      <div className="py-20 lg:py-32">
        <div className="mx-auto max-w-lg px-4 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We&apos;ll send you a confirmation email with your order details and tracking information.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="py-20 lg:py-32">
        <div className="mx-auto max-w-lg px-4 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Add some perfumes to your cart before checking out.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/shop">Browse Perfumes</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-xl mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Ahmed" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Khan" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ahmed@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="0300-1234567" required />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="font-serif text-xl mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Karachi" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" placeholder="75500" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="province">Province</Label>
                    <Select required>
                      <SelectTrigger id="province">
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sindh">Sindh</SelectItem>
                        <SelectItem value="punjab">Punjab</SelectItem>
                        <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                        <SelectItem value="balochistan">Balochistan</SelectItem>
                        <SelectItem value="islamabad">Islamabad Capital Territory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="font-serif text-xl mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Select Payment Method</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                      <SelectTrigger id="paymentMethod">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                        <SelectItem value="jazzcash">JazzCash</SelectItem>
                        <SelectItem value="easypaisa">EasyPaisa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(paymentMethod === "jazzcash" || paymentMethod === "easypaisa") && (
                    <div className="space-y-4 p-5 bg-secondary/50 border border-border rounded-xl">
                      {/* Payment Info Header */}
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            {paymentMethod === "jazzcash" ? "JazzCash" : "EasyPaisa"} Payment
                          </h3>
                          <p className="text-xs text-muted-foreground">Send payment and upload proof</p>
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <p className="text-sm text-foreground leading-relaxed">
                          Please send the total amount of <span className="font-semibold text-accent">{formatPrice(grandTotal)}</span> to the account number below and upload the screenshot for verification.
                        </p>
                      </div>

                      {/* Account Number */}
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">Account Number</Label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-card border border-border rounded-lg px-4 py-3 font-mono text-lg font-semibold tracking-wider">
                            {accountNumber}
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={handleCopyNumber}
                            className="h-12 w-12 shrink-0"
                          >
                            {copied ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {copied && (
                          <p className="text-xs text-green-600">Number copied to clipboard!</p>
                        )}
                      </div>

                      {/* Screenshot Upload */}
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wide">Payment Screenshot</Label>
                        <div className="relative">
                          <input
                            type="file"
                            id="screenshot"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            required
                          />
                          <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${screenshot ? 'border-green-500 bg-green-50/50' : 'border-border hover:border-accent/50'}`}>
                            {screenshot ? (
                              <div className="flex flex-col items-center gap-2">
                                <Check className="h-8 w-8 text-green-600" />
                                <p className="text-sm font-medium text-green-600">Screenshot uploaded</p>
                                <p className="text-xs text-muted-foreground">{screenshot.name}</p>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-2">
                                <Upload className="h-8 w-8 text-muted-foreground" />
                                <p className="text-sm font-medium">Click to upload screenshot</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cod" && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Pay with cash when your order is delivered. Please have the exact amount ready.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isSubmitting || !paymentMethod || ((paymentMethod === "jazzcash" || paymentMethod === "easypaisa") && !screenshot)}
              >
                {isSubmitting ? "Processing..." : `Place Order - ${formatPrice(grandTotal)}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-2 -right-2 h-5 w-5 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                      <p className="text-sm font-medium mt-1">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Free shipping on orders over {formatPrice(5000)}
                  </p>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
