"use client"

import { useState } from "react"
import { Search, X } from 'lucide-react'
import { categoryOptions, styleOptions } from "@/app/lib/product-data"

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  searchQuery: string
  priceRange: [number, number]
  selectedCategories: string[]
  selectedStyles: string[]
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    priceRange: [0, 500],
    selectedCategories: [],
    selectedStyles: [],
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const emptyFilters: FilterState = {
      searchQuery: "",
      priceRange: [0, 500],
      selectedCategories: [],
      selectedStyles: [],
    }
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange({ ...filters, searchQuery: e.target.value })}
          />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 border border-border rounded-lg bg-background hover:bg-muted transition-colors"
        >
          {isExpanded ? "Hide Filters" : "Show Filters"}
        </button>
        {(filters.selectedCategories.length > 0 || filters.selectedStyles.length > 0) && (
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filters Panel */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-muted rounded-lg border border-border mb-6">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="500"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    priceRange: [filters.priceRange[0], Number(e.target.value)],
                  })
                }
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Category</h3>
            <div className="space-y-2">
              {categoryOptions.map((category) => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.selectedCategories.includes(category)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...filters.selectedCategories, category]
                        : filters.selectedCategories.filter((c) => c !== category)
                      handleFilterChange({ ...filters, selectedCategories: updated })
                    }}
                    className="w-4 h-4 rounded border border-border"
                  />
                  <span className="text-sm text-foreground">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Style</h3>
            <div className="flex flex-wrap gap-2">
              {styleOptions.map((style) => (
                <button
                  key={style}
                  onClick={() => {
                    const updated = filters.selectedStyles.includes(style)
                      ? filters.selectedStyles.filter((s) => s !== style)
                      : [...filters.selectedStyles, style]
                    handleFilterChange({ ...filters, selectedStyles: updated })
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.selectedStyles.includes(style)
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
