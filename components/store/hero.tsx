import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-6">
          Luxury Fragrances
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary-foreground text-balance leading-tight">
          Discover Your <br />
          <span className="text-accent">Signature Scent</span>
          <span className="text-accent">experience their charm</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
          Exquisite perfumes crafted with the finest ingredients from around the world. 
          Each fragrance tells a unique story.Crafted with the finest ingredients,our prefect blend of scents will captivate your senses and loves you in a world of elegance and aliure.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/shop">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="px-8 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/collections">View Collections</Link>
          </Button>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-primary-foreground/40" />
      </div>
    </section>
  )
}
