import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-yellow-300 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Premium Transportation?
          </h2>
          <p className="mb-8 opacity-90">
            Book your ride now or call us for immediate assistance. Our team is standing by 24/7
            to serve you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="text-lg"
              asChild
            >
              <Link href="#booking">
                <MessageSquare className="w-5 h-5 mr-2" />
                Book Online
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="tel:0123456789">
                <Phone className="w-5 h-5 mr-2" />
                Call: 01234 567 890
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
