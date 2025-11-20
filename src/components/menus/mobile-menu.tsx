"use client";

import { MenuIcon, Phone, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { mainMenuList } from "./main-menu-list";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant={'ghost'} size={'icon'}>
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>QuickRide Taxi</SheetTitle>
          <SheetDescription>Navigate our services and book your ride</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8 px-4">
          {mainMenuList.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-6">
            <Button asChild variant={'outline'} size={'lg'} className="w-full">
              <Link href="tel:+15551234567" onClick={() => setOpen(false)}>
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (555) 123-4567
              </Link>
            </Button>
            <Button asChild size={'lg'} className="w-full">
              <Link href='/#booking' onClick={() => setOpen(false)}>
                Book a Ride Now
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground mb-2">Available 24/7</p>
            <p className="text-xs text-muted-foreground">
              Safe, reliable, and comfortable rides anytime, anywhere.
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

