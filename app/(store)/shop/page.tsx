"use client"

import { useState } from "react"
import { ProductCard } from "@/components/store/product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
            Shop All Fragrances
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our exclusive collection of luxury perfumes, each crafted with the finest ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={cn(
                "rounded-full px-6",
                selectedCategory === category &&
                  "bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No perfumes found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
