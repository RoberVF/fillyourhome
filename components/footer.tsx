import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marca */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">FH</span>
              </div>
              <span className="font-serif text-lg font-semibold text-primary">Fill Your Home</span>
            </Link>
            <p className="text-sm text-muted-foreground">Muebles únicos con historias, para un hogar más sostenible.</p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces</h4>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="#tienda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tienda
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@fillyourhome.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Síguenos</h4>
            <div className="flex gap-3">
              <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Fill Your Home. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
