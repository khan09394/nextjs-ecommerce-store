"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            Join the ZK Family
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Subscribe to receive exclusive offers, new fragrance launches, and insider tips on finding your perfect scent.
          </p>

          {submitted ? (
            <p className="text-foreground font-medium">
              Thank you for subscribing! Welcome to the ZK family.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border"
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
