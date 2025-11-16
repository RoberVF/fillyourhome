"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductFilters, FilterState } from "./product-filters"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { allProducts } from "@/app/lib/product-data"

const ITEMS_PER_PAGE = 6

export function ProductsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    priceRange: [0, 500],
    selectedCategories: [],
    selectedStyles: [],
  })

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
    
    const matchesPrice =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    
    const matchesCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(product.category)
    
    const matchesStyle =
      filters.selectedStyles.length === 0 ||
      product.styles.some((s) => filters.selectedStyles.includes(s))

    return matchesSearch && matchesPrice && matchesCategory && matchesStyle
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  return (
    <section id="tienda" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Our Furniture
          </h2>
          <p className="text-muted-foreground">Discover our updated selection of second-hand furniture</p>
        </div>

        <ProductFilters onFilterChange={handleFilterChange} />

        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} products | Page {currentPage} of {totalPages}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
