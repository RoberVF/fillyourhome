"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Sofá Vintage Gris",
    price: 450,
    image: "/vintage-gray-sofa-mid-century.jpg",
    category: "Sofás",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Mesa de Roble Macizo",
    price: 280,
    image: "/solid-oak-dining-table.jpg",
    category: "Mesas",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Lámpara de Pie Retro",
    price: 95,
    image: "/retro-floor-lamp-brass.jpg",
    category: "Iluminación",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Armario de Pino",
    price: 350,
    image: "/pine-wood-cabinet-vintage.jpg",
    category: "Muebles",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Silla Eames Blanca",
    price: 180,
    image: "/white-eames-style-chair.jpg",
    category: "Sofás",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Estantería Metálica",
    price: 220,
    image: "/metal-industrial-shelf.jpg",
    category: "Muebles",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Espejo Marco Dorado",
    price: 120,
    image: "/gold-frame-mirror-ornate.jpg",
    category: "Decoración",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Escritorio Madera",
    price: 315,
    image: "/wooden-desk-home-office.jpg",
    category: "Mesas",
    rating: 4.6,
  },
]

const ITEMS_PER_PAGE = 6

export function ProductsSection() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = allProducts.slice(startIndex, endIndex)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="tienda" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Nuestros Muebles</h2>
          <p className="text-muted-foreground">Descubre nuestra selección actualizada de muebles de segunda mano</p>
        </div>

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
            aria-label="Página anterior"
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
            aria-label="Próxima página"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Mostrando {startIndex + 1} - {Math.min(endIndex, allProducts.length)} de {allProducts.length} productos |
          Página {currentPage} de {totalPages}
        </div>
      </div>
    </section>
  )
}
