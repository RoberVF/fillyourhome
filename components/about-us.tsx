export function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About us</h2>
          <p className="text-lg text-muted-foreground">Learn the story behind Fill Your Home</p>
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
              In <span className="font-semibold text-foreground">Fill Your Home</span>, we believe that every piece of furniture has a story and potential. We give your home a new life, thanks to quality secondhand furniture.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Our mision</h3>
                <p className="text-muted-foreground">
                  Facilitating access to quality and stylish furniture, promoting sustainability and conscious consumption.                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Sustainability, transparency, quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
