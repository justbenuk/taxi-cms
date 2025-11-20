import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { RootProps } from "@/types/global-props";

export default function RootLayout({ children }: RootProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

