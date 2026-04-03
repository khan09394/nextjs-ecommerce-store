import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { FeaturedProducts } from "@/components/store/featured-products"
import { Categories } from "@/components/store/categories"
import { Newsletter } from "@/components/store/newsletter"
import { Footer } from "@/components/store/footer"
import { CartDrawer } from "@/components/store/cart-drawer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
