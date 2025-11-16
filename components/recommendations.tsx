"use client"

import { useState, useEffect } from "react"
import { Heart, Star } from 'lucide-react'
import Link from "next/link"
import { allProducts, Product } from "@/app/lib/product-data"

interface UserPreferences {
  favoriteStyles: string[]
  favoriteCategories: string[]
  budgetRange: [number, number]
}

export function Recommendations() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null)
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([])
  const [isFavorite, setIsFavorite] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem("userPreferences")
    if (saved) {
      const prefs: UserPreferences = JSON.parse(saved)
      setPreferences(prefs)

      // Filter products based on preferences
      const filtered = allProducts.filter((product) => {
        const matchesCategory = prefs.favoriteCategories.length === 0 || 
          prefs.favoriteCategories.includes(product.category)
        const matchesStyle = prefs.favoriteStyles.length === 0 ||
          product.styles.some((s) => prefs.favoriteStyles.includes(s))
        const matchesBudget =
          product.price >= prefs.budgetRange[0] && product.price <= prefs.budgetRange[1]

        return matchesCategory && matchesStyle && matchesBudget
      })

      setRecommendedProducts(filtered.slice(0, 6))
    }
  }, [])

  if (!preferences || recommendedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Recommendations For You
          </h2>
          <p className="text-muted-foreground">
            Based on your style preferences and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => setIsFavorite({ ...isFavorite, [product.id]: !isFavorite[product.id] })}
                  className="absolute top-3 right-3 p-2 bg-card rounded-lg shadow-md hover:bg-muted transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFavorite[product.id]
                        ? "fill-accent text-accent"
                        : "text-foreground"
                    }`}
                  />
                </button>
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.rating})</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.styles.slice(0, 2).map((style) => (
                    <span
                      key={style}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <Link
                    href={`/product/${product.id}`}
                    className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
