import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Manuela Castellano",
    role: "Client since 2022",
    content:
      "I found the perfect sofa for my living room. The quality is excellent and the price is very fair.",
    rating: 5,
    image: "/customer-avatar-woman.jpg",
  },
  {
    id: 2,
    name: "Gimena Morales",
    role: "Client since 2023",
    content:
      "The service is incredible. They helped me choose the perfect table for my dining room. Very professional and attentive.", 
    rating: 4,
    image: "/customer-avatar-woman.jpg",
  },
  {
    id: 3,
    name: "Carmen Ojeda",
    role: "Client since 2021",
    content: "Second-hand furniture of first-rate quality. I've bought several pieces and they've all lasted me for years.",
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
            What our customers say
          </h2>
          <p className="text-lg text-muted-foreground">Real opinions from people who trust us</p>
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
