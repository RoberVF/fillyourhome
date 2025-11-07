import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">Sustainable Furniture</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                Fill your home with stories
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Every piece of furniture has a story. Discover unique, pre-owned pieces, carefully selected to bring warmth and character to your space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#tienda"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore Store
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                See Catalog
              </button>
            </div>
          </div>

          <div className="relative h-80 md:h-96 bg-muted rounded-2xl overflow-hidden">
            <img
              src="/icon.jpeg"
              alt="Muebles de segunda mano elegantes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
