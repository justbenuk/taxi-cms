import MainMenu from "../menus/main-menu";
import MobileMenu from "../menus/mobile-menu";
import MainLogo from "../shared/main-logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <MainLogo />
          <MainMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

