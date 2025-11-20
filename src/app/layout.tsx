import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { RootProps } from "@/types/global-props";


export const metadata: Metadata = {
  title: {
    template: '%s | QuickRide Taxi',
    default: 'QuickRide Taxi - Reliable Transportation Service 24/7'
  },
  description: "Professional taxi service available 24/7. Airport transfers, city rides, corporate transportation, and more. Safe, comfortable, and affordable rides.",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" attribute={'class'} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
