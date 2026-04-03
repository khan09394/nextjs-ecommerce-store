import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Perfumes", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Bestsellers", href: "/shop" },
    { name: "New Arrivals", href: "/shop" },
  ],
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Contact Us", href: "/about" },
  ],
  help: [
    { name: "Shipping Info", href: "/about" },
    { name: "Returns", href: "/about" },
    { name: "FAQ", href: "/about" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-wide mb-4">
              ZK <span className="text-accent">Collections</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Crafting exquisite fragrances that tell your unique story. Premium perfumes made with the finest ingredients.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 ZK Collections. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="/about" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
