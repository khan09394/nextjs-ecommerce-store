"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your store settings</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Store Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">Store Information</CardTitle>
            <CardDescription>Basic information about your store</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="ZK Collections" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeDescription">Store Description</Label>
                <Textarea
                  id="storeDescription"
                  defaultValue="Luxury perfumes crafted with the finest ingredients from around the world."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeEmail">Contact Email</Label>
                <Input id="storeEmail" type="email" defaultValue="contact@zkcollections.pk" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storePhone">Contact Phone</Label>
                <Input id="storePhone" type="tel" defaultValue="+92 300 1234567" />
              </div>
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {saved ? "Saved!" : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Shipping Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">Shipping Settings</CardTitle>
            <CardDescription>Configure shipping rates and free shipping threshold</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shippingRate">Standard Shipping Rate (PKR)</Label>
                <Input id="shippingRate" type="number" defaultValue="250" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="freeShippingThreshold">Free Shipping Threshold (PKR)</Label>
                <Input id="freeShippingThreshold" type="number" defaultValue="5000" />
                <p className="text-xs text-muted-foreground">
                  Orders above this amount qualify for free shipping
                </p>
              </div>
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {saved ? "Saved!" : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">Payment Methods</CardTitle>
            <CardDescription>Configure accepted payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">Accept cash payments on delivery</p>
                </div>
                <span className="text-sm text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">JazzCash</p>
                  <p className="text-sm text-muted-foreground">Mobile wallet payments via JazzCash</p>
                </div>
                <span className="text-sm text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">EasyPaisa</p>
                  <p className="text-sm text-muted-foreground">Mobile wallet payments via EasyPaisa</p>
                </div>
                <span className="text-sm text-green-600 font-medium">Enabled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
