import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plane,
  MapPin,
  Briefcase,
  Calendar
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Reliable airport pickup and drop-off services. Track your flight and we'll adjust pickup time automatically.",
    features: ["Flight tracking", "Premium Drop-Off", "Luggage assistance"],
    popular: true
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional transportation solutions for businesses. Monthly billing and dedicated account management.",
    features: ["Priority booking", "Invoicing", "Account manager"],
    popular: false
  },
  {
    icon: MapPin,
    title: "Long Distance",
    description: "Comfortable rides for longer journeys. Intercity travel made easy with fixed rates and no surprises.",
    features: ["Fixed pricing", "Rest stops", "Premium comfort"],
    popular: false
  },
  {
    icon: Calendar,
    title: "Event Transportation",
    description: "Special event transportation for weddings, parties, and corporate events. Group bookings available.",
    features: ["Group rates", "Coordination", "Premium vehicles"],
    popular: false
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-yellow-300">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive transportation solutions tailored to meet all your travel needs,
            from daily commutes to special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 relative ${service.popular ? "border-yellow-300 border-2" : ""
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-yellow-300 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    From £36
                  </div>
                )}

                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="#booking">Book Now</Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
