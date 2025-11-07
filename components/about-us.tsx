export function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Sobre nosotros</h2>
          <p className="text-lg text-muted-foreground">Conoce la historia detrás de Fill Your Home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/about-us-furniture-store.jpg"
              alt="Tienda Fill Your Home"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En <span className="font-semibold text-foreground">Fill Your Home</span>, creemos que cada mueble tiene
              una historia y un potencial. Desde 2018, nos hemos dedicado a rescatar muebles de segunda mano de calidad,
              dándoles una nueva vida en tu hogar.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Facilitar el acceso a muebles de calidad y estilo, promoviendo la sostenibilidad y el consumo
                  consciente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Nuestros Valores</h3>
                <p className="text-muted-foreground">
                  Sostenibilidad, transparencia, calidad y atención personalizada en cada venta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
