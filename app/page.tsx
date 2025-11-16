import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { ProductsSection } from "@/components/products-section"
import { Recommendations } from "@/components/recommendations"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <ProductsSection />
        <Recommendations />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
