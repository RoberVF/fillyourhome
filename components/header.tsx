"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "/#" },
    { label: "Tienda", href: "/#tienda" },
    { label: "Sobre Nosotros", href: "/#about" },
    { label: "Contacto", href: "/#contact" },
  ]

  return (
    <header className="border-b border-border bg-card">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">FH</span>
              </div>
              <span className="hidden sm:inline font-serif text-xl font-semibold text-primary">Fill Your Home</span>
            </Link>

            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors px-2 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
