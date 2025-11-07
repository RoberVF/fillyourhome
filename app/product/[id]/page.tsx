"use client"

import { useState, use } from "react"
import { Heart, MessageSquare, Package, Phone, Mail, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Datos de todos los productos
const allProducts = [
  {
    id: 1,
    name: "Grey Vintage Sofa",
    price: 110,
    image: "/vintage-gray-sofa-mid-century.jpg",
    category: "Sofas",
    rating: 4.5,
    stock: 3,
    description: "Beautiful mid-century style vintage sofa. Perfect for adding character to your living room.",
    images: ["/vintage-gray-sofa-mid-century.jpg", "/vintage-gray-sofa.jpg", "/sofa-details.jpg"],
  },
  {
    id: 2,
    name: "Solid Oak Dining Table",
    price: 70,
    image: "/solid-oak-dining-table.jpg",
    category: "Tables",
    rating: 4.8,
    stock: 2,
    description: "Solid oak dining table with a natural finish. Ideal for large families.",
    images: ["/solid-oak-dining-table.jpg", "/rustic-oak-table.png", "/wooden-table-details.jpg"],
  },
  {
    id: 3,
    name: "Retro Floor Lamp",
    price: 20,
    image: "/retro-floor-lamp-brass.jpg",
    category: "Lightning",
    rating: 4.6,
    stock: 5,
    description: "Retro floor lamp with a brass frame. Perfect for creating a cozy atmosphere.",
    images: ["/retro-floor-lamp-brass.jpg", "/brass-floor-lamp.png", "/lamp-details.jpg"],
  },
  {
    id: 4,
    name: "Pine Wardrobe",
    price: 35,
    image: "/pine-wood-cabinet-vintage.jpg",
    category: "Furniture",
    rating: 4.7,
    stock: 1,
    description: "Vintage pine wood cabinet with lots of character. Ideal for decorative storage.",
    images: ["/pine-wood-cabinet-vintage.jpg", "/pine-cabinet-vintage.jpg", "/cabinet-details.jpg"],
  },
  {
    id: 5,
    name: "White Eames Chair",
    price: 15,
    image: "/white-eames-style-chair.jpg",
    category: "Sofas",
    rating: 4.9,
    stock: 4,
    description: "Eames-style chair in white. Classic and versatile for any space.",
    images: ["/white-eames-style-chair.jpg", "/eames-style-white-chair.jpg", "/chair-details.jpg"],
  },
  {
    id: 6,
    name: "Metal Shelving",
    price: 15,
    image: "/metal-industrial-shelf.jpg",
    category: "Furniture",
    rating: 4.4,
    stock: 2,
    description: "Industrial-style shelving unit with a metal frame. Perfect for modern spaces.",
    images: ["/metal-industrial-shelf.jpg", "/industrial-metal-shelf.jpg", "/shelf-details.jpg"],
  },
  {
    id: 7,
    name: "Golden Frame Mirror",
    price: 25,
    image: "/gold-frame-mirror-ornate.jpg",
    category: "Decoration",
    rating: 4.5,
    stock: 6,
    description: "Decorative mirror with ornate gold frame. Ideal for adding light and elegance.",
    images: ["/gold-frame-mirror-ornate.jpg", "/gold-frame-mirror.jpg", "/mirror-details.jpg"],
  },
  {
    id: 8,
    name: "Wooden Desk",
    price: 30,
    image: "/wooden-desk-home-office.jpg",
    category: "Tables",
    rating: 4.6,
    stock: 2,
    description: "Solid wood desk for home office. Spacious and sturdy.",
    images: ["/wooden-desk-home-office.jpg", "/wooden-desk-home-office.jpg", "/desk-details.jpg"],
  },
]

export default function ProductDetail({ params: paramsPromise }: { params: Promise<{id: string}> }) {
  const params = use(paramsPromise)
  const product = allProducts.find((p) => p.id === Number.parseInt(params.id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product no found!</h1>
            <Link href="/" className="text-primary hover:underline">
              Return Home
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
              Home
            </Link>
            <span>/</span>
            <Link href="/#tienda" className="hover:text-foreground">
              Shop
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
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${index === currentImageIndex ? "border-primary" : "border-border"
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
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <p className="text-4xl font-bold text-primary">${product.price}</p>
                </div>

                {/* Stock */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <Package className="w-5 h-5 text-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Stock not available</p>
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
                    Shop now!
                  </button>
                  <button
                    className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={product.stock === 0}
                  >
                    Reserve
                  </button>
                </div>
              </div>

              {/* Contacto */}
              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Contact us
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
                    info@fillyourhome.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Productos similares */}
          {similarProducts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">Similar products</h2>
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
