"use client"

import { useState } from "react"
import { Heart, MessageSquare, Package, Phone, Mail, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Datos de todos los productos
const allProducts = [
  {
    id: 1,
    name: "Sofá Vintage Gris",
    price: 450,
    image: "/vintage-gray-sofa-mid-century.jpg",
    category: "Sofás",
    rating: 4.5,
    stock: 3,
    description: "Hermoso sofá vintage de estilo mid-century. Perfecto para agregar carácter a tu sala de estar.",
    images: ["/vintage-gray-sofa-mid-century.jpg", "/vintage-gray-sofa.jpg", "/sofa-details.jpg"],
  },
  {
    id: 2,
    name: "Mesa de Roble Macizo",
    price: 280,
    image: "/solid-oak-dining-table.jpg",
    category: "Mesas",
    rating: 4.8,
    stock: 2,
    description: "Mesa de comedor en roble macizo con acabado natural. Ideal para familias grandes.",
    images: ["/solid-oak-dining-table.jpg", "/rustic-oak-table.png", "/wooden-table-details.jpg"],
  },
  {
    id: 3,
    name: "Lámpara de Pie Retro",
    price: 95,
    image: "/retro-floor-lamp-brass.jpg",
    category: "Iluminación",
    rating: 4.6,
    stock: 5,
    description: "Lámpara de pie retro con estructura de latón. Perfecta para crear una atmósfera acogedora.",
    images: ["/retro-floor-lamp-brass.jpg", "/brass-floor-lamp.png", "/lamp-details.jpg"],
  },
  {
    id: 4,
    name: "Armario de Pino",
    price: 350,
    image: "/pine-wood-cabinet-vintage.jpg",
    category: "Muebles",
    rating: 4.7,
    stock: 1,
    description: "Armario vintage de madera de pino con mucho carácter. Ideal para almacenamiento decorativo.",
    images: ["/pine-wood-cabinet-vintage.jpg", "/pine-cabinet-vintage.jpg", "/cabinet-details.jpg"],
  },
  {
    id: 5,
    name: "Silla Eames Blanca",
    price: 180,
    image: "/white-eames-style-chair.jpg",
    category: "Sofás",
    rating: 4.9,
    stock: 4,
    description: "Silla estilo Eames en color blanco. Clásica y versátil para cualquier espacio.",
    images: ["/white-eames-style-chair.jpg", "/eames-style-white-chair.jpg", "/chair-details.jpg"],
  },
  {
    id: 6,
    name: "Estantería Metálica",
    price: 220,
    image: "/metal-industrial-shelf.jpg",
    category: "Muebles",
    rating: 4.4,
    stock: 2,
    description: "Estantería de estilo industrial con estructura de metal. Perfecta para espacios modernos.",
    images: ["/metal-industrial-shelf.jpg", "/industrial-metal-shelf.jpg", "/shelf-details.jpg"],
  },
  {
    id: 7,
    name: "Espejo Marco Dorado",
    price: 120,
    image: "/gold-frame-mirror-ornate.jpg",
    category: "Decoración",
    rating: 4.5,
    stock: 6,
    description: "Espejo decorativo con marco dorado ornamentado. Ideal para agregar luz y elegancia.",
    images: ["/gold-frame-mirror-ornate.jpg", "/gold-frame-mirror.jpg", "/mirror-details.jpg"],
  },
  {
    id: 8,
    name: "Escritorio Madera",
    price: 315,
    image: "/wooden-desk-home-office.jpg",
    category: "Mesas",
    rating: 4.6,
    stock: 2,
    description: "Escritorio de madera sólida para home office. Espacio amplio y resistente.",
    images: ["/wooden-desk-home-office.jpg", "/wooden-desk-home-office.jpg", "/desk-details.jpg"],
  },
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === Number.parseInt(params.id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Producto no encontrado</h1>
            <Link href="/" className="text-primary hover:underline">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const similarProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Inicio
            </Link>
            <span>/</span>
            <Link href="#tienda" className="hover:text-foreground">
              Tienda
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Galería de imágenes */}
            <div>
              <div className="relative h-96 md:h-full min-h-[400px] bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-md hover:bg-muted transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-md hover:bg-muted transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Miniaturas */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-border"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Detalles del producto */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                    {product.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">{product.name}</h1>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors ${isFavorite ? "fill-accent text-accent" : "text-foreground"}`}
                  />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.rating})</span>
              </div>

              {/* Descripción */}
              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

              {/* Precio y stock */}
              <div className="bg-muted p-6 rounded-lg mb-6">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Precio</p>
                  <p className="text-4xl font-bold text-primary">${product.price}</p>
                </div>

                {/* Stock */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <Package className="w-5 h-5 text-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Stock disponible</p>
                    <p className={`font-semibold ${product.stock > 0 ? "text-foreground" : "text-red-500"}`}>
                      {product.stock > 0 ? `${product.stock} unidades` : "Agotado"}
                    </p>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col gap-3">
                  <button
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={product.stock === 0}
                  >
                    Comprar ahora
                  </button>
                  <button
                    className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={product.stock === 0}
                  >
                    Reservar
                  </button>
                </div>
              </div>

              {/* Contacto */}
              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Contactar con nosotros
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+34123456789"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +34 123 456 789
                  </a>
                  <a
                    href="mailto:info@fillhome.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@fillhome.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Productos similares */}
          {similarProducts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">Productos similares</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarProducts.slice(0, 3).map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/product/${prod.id}`}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={prod.image || "/placeholder.svg"}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {prod.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">{prod.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">${prod.price}</span>
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
