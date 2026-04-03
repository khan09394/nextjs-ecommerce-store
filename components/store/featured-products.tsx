"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "./product-card"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-2">
              Featured Fragrances
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              Bestsellers
            </h2>
          </div>
          <Button asChild variant="ghost" className="self-start sm:self-auto group">
            <Link href="/shop" className="flex items-center gap-2">
              View All Perfumes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
