import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: "1",
    name: "Oriental Classics",
    description: "Rich oud and amber blends for evening allure",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=600&fit=crop",
    itemCount: 3,
  },
  {
    id: "2",
    name: "Floral Elegance",
    description: "Delicate rose and jasmine for timeless femininity",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&h=600&fit=crop",
    itemCount: 2,
  },
  {
    id: "3",
    name: "Fresh & Citrus",
    description: "Vibrant scents for the modern individual",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=600&fit=crop",
    itemCount: 1,
  },
  {
    id: "4",
    name: "Woody Mysteries",
    description: "Deep cedar and vetiver for sophisticated souls",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=600&fit=crop",
    itemCount: 2,
  },
]

export default function CollectionsPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Curated For You
          </p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
            Our Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated fragrance collections, each designed to evoke unique emotions and memories.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href="/shop"
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-card mb-2">
                      {collection.name}
                    </h2>
                    <p className="text-card/80 text-sm md:text-base mb-1">
                      {collection.description}
                    </p>
                    <p className="text-accent text-sm">
                      {collection.itemCount} fragrances
                    </p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
