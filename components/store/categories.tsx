import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoryItems = [
  {
    name: "Oriental",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop",
    href: "/shop",
  },
  {
    name: "Floral",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&h=1000&fit=crop",
    href: "/shop",
  },
  {
    name: "Woody",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop",
    href: "/shop",
  },
]

export function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Shop by Fragrance Family
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categoryItems.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="font-serif text-2xl text-card tracking-wide">
                  {category.name}
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
