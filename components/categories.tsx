"use client"

import { Sofa, Table, Lamp, Frame } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Sofás & Sillas",
    icon: Sofa,
    description: "Cómodos sofás y sillas",
    count: 24,
  },
  {
    id: 2,
    name: "Mesas",
    icon: Table,
    description: "Mesas para comedor",
    count: 18,
  },
  {
    id: 3,
    name: "Iluminación",
    icon: Lamp,
    description: "Lámparas y accesorios",
    count: 12,
  },
  {
    id: 4,
    name: "Decoración",
    icon: Frame,
    description: "Cuadros y adornos",
    count: 31,
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Categorías</h2>
          <p className="text-muted-foreground">Explora nuestras colecciones organizadas por categoría</p>
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
                <span className="text-xs font-medium text-primary">{category.count} productos</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
