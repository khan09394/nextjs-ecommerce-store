"use client"

import Image from "next/image"
import { Product, formatPrice } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
        <Button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-foreground hover:bg-foreground/90 text-background"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        {product.stock < 20 && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
            Only {product.stock} left
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs text-accent font-medium uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.notes.top.join(", ")} · {product.notes.middle[0]}
        </p>
        <p className="font-medium mt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}
