"use client"

import { Sofa, Table, Lamp, Frame } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Sofas & Chairs",
    icon: Sofa,
    description: "Comfortable sofas and chairs",
    count: 2,
  },
  {
    id: 2,
    name: "Tables",
    icon: Table,
    description: "Dining tables",
    count: 3,
  },
  {
    id: 3,
    name: "Lightning",
    icon: Lamp,
    description: "Lamps and accessories",
    count: 12,
  },
  {
    id: 4,
    name: "Decoration",
    icon: Frame,
    description: "Pictures and decorations",
    count: 31,
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Categories</h2>
          <p className="text-muted-foreground">Explore our collections organized by category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="mb-4 inline-flex p-3 bg-secondary/20 group-hover:bg-secondary/40 rounded-lg transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <span className="text-xs font-medium text-primary">{category.count} products</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
