import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
              Crafting scents that tell your story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2022, ZK Collections was born from a passion for creating exceptional fragrances that capture the essence of luxury. We source the finest ingredients from around the world to craft perfumes that leave a lasting impression.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616169201999-0d80789b141a?w=800&h=1000&fit=crop"
              alt="Perfume bottles artfully arranged"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every fragrance in our collection is a masterpiece, crafted with dedication to quality and an eye for detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-accent">01</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Premium Ingredients</h3>
              <p className="text-muted-foreground text-sm">
                We source rare ingredients from trusted suppliers worldwide, ensuring authenticity and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-accent">02</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Expert Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">
                Each fragrance is carefully composed by expert perfumers with decades of experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-accent">03</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Long-Lasting Luxury</h3>
              <p className="text-muted-foreground text-sm">
                Our perfumes are designed to last, with rich sillage that leaves a memorable impression.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-8 text-balance">
            {`"A great perfume is more than a scent - it's a memory, an emotion, a signature that speaks without words."`}
          </blockquote>
          <div>
            <p className="font-medium">Zain Khan</p>
            <p className="text-sm text-muted-foreground">Founder, ZK Collections</p>
          </div>
        </div>
      </div>
    </div>
  )
}
