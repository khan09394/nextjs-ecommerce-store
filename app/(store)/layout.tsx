import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { CartDrawer } from "@/components/store/cart-drawer"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CartDrawer />
    </>
  )
}
