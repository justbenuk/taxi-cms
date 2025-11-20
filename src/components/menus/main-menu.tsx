import Link from "next/link"
import { Button } from "../ui/button"
import { Phone } from "lucide-react"
import { mainMenuList } from "./main-menu-list"

export default function MainMenu() {

  return (
    <nav className="hidden lg:flex flex-row items-center gap-6">
      {mainMenuList.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
      <div className="flex items-center gap-3 ml-2">
        <Button asChild variant={'outline'} size={'sm'}>
          <Link href="tel:+15551234567">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Link>
        </Button>
        <Button asChild size={'sm'}>
          <Link href='/#booking'>Book a Ride</Link>
        </Button>
      </div>
    </nav>
  )
}

