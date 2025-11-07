"use client"

import { Heart, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-card rounded-lg shadow-md hover:bg-muted transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavorite ? "fill-accent text-accent" : "text-foreground"}`}
          />
        </button>
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Link
            href={`/product/${product.id}`}
            className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            See
          </Link>
        </div>
      </div>
    </div>
  )
}
