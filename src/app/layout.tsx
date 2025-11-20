import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { RootProps } from "@/types/global-props";


export const metadata: Metadata = {
  title: {
    template: '%s - Taxi Company',
    default: 'Taxi Company'
  },
  description: "Your Towns number one transport provider, Available 24 hours a day",
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
