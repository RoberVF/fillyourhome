import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Cliente desde 2022",
    content:
      "Encontré el sofá perfecto para mi sala. La calidad es excelente y el precio es muy justo. Recomiendo Fill Your Home a todos mis amigos.",
    rating: 5,
    image: "/customer-avatar-woman.jpg",
  },
  {
    id: 2,
    name: "Juan López",
    role: "Cliente desde 2023",
    content:
      "El servicio es increíble. Me ayudaron a elegir la mesa perfecta para mi comedor. Muy profesionales y atentos.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Carmen Rodríguez",
    role: "Cliente desde 2021",
    content: "Muebles de segunda mano con calidad de primero. He comprado varias piezas y todas me han durado años.",
    rating: 5,
    image: "/customer-avatar-woman.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">Opiniones reales de personas que confían en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
