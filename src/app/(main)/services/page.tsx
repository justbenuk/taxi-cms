import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Building2,
  MapPin,
  Clock3,
  Briefcase,
  Calendar,
  Users,
  Car,
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore QuickRide's comprehensive taxi services - airport transfers, city rides, corporate travel, and more. Professional transportation for every need.",
};

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Reliable pickup and drop-off services for all major airports. We monitor flight schedules and adjust pickup times automatically.",
    features: [
      "Flight tracking and monitoring",
      "Meet & greet service at arrivals",
      "Luggage assistance included",
      "Fixed rates, no surge pricing",
      "Available 24/7, every day",
      "Professional, uniformed drivers"
    ],
    benefits: [
      "Never miss your flight",
      "Stress-free travel experience",
      "Premium vehicles available",
      "Group transportation options"
    ],
    pricing: "Starting from $45",
    popular: true
  },
  {
    icon: Building2,
    title: "City Rides",
    description: "Quick and convenient transportation around the city. Perfect for shopping, dining, appointments, or any local travel needs.",
    features: [
      "Instant booking available",
      "Multiple stops allowed",
      "Best routes optimization",
      "Clean, comfortable vehicles",
      "Cashless payment options",
      "Real-time GPS tracking"
    ],
    benefits: [
      "Save time on parking",
      "Affordable daily rates",
      "Eco-friendly vehicle options",
      "Loyalty rewards program"
    ],
    pricing: "Starting from $15",
    popular: false
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional transportation solutions tailored for businesses. Dedicated account management and flexible billing options.",
    features: [
      "Priority booking system",
      "Monthly billing & invoicing",
      "Dedicated account manager",
      "Volume discounts available",
      "Detailed trip reporting",
      "Executive vehicle options"
    ],
    benefits: [
      "Impress clients and partners",
      "Control travel expenses",
      "Simplified expense reporting",
      "Customizable service packages"
    ],
    pricing: "Custom packages",
    popular: false
  },
  {
    icon: MapPin,
    title: "Long Distance",
    description: "Comfortable rides for longer journeys and intercity travel. Fixed rates with no hidden charges or surprises.",
    features: [
      "Fixed pricing guaranteed",
      "Scheduled rest stops",
      "Premium comfort vehicles",
      "Experienced long-haul drivers",
      "Advance booking available",
      "Flexible payment options"
    ],
    benefits: [
      "More comfortable than bus",
      "Door-to-door service",
      "Travel at your schedule",
      "Safe and reliable"
    ],
    pricing: "Starting from $150",
    popular: false
  },
  {
    icon: Clock3,
    title: "Hourly Rental",
    description: "Book a car with driver for multiple hours. Perfect for business meetings, events, sightseeing, or running multiple errands.",
    features: [
      "Flexible hourly packages",
      "Multiple stops included",
      "Professional chauffeur",
      "Premium vehicle selection",
      "Extended hours available",
      "No hidden charges"
    ],
    benefits: [
      "Complete flexibility",
      "Cost-effective for multiple trips",
      "No parking hassles",
      "Productive use of time"
    ],
    pricing: "Starting from $50/hour",
    popular: false
  },
  {
    icon: Calendar,
    title: "Event Transportation",
    description: "Special event transportation for weddings, parties, conferences, and corporate events. Group bookings with coordination.",
    features: [
      "Group rate discounts",
      "Event coordination service",
      "Premium vehicle fleet",
      "Flexible scheduling",
      "Multiple pickup locations",
      "Dedicated event manager"
    ],
    benefits: [
      "Ensure guests arrive on time",
      "Stress-free event logistics",
      "Professional presentation",
      "Customizable packages"
    ],
    pricing: "Custom quotes",
    popular: false
  }
];

const additionalServices = [
  {
    icon: Users,
    title: "Group Transportation",
    description: "Large vehicles for groups up to 12 passengers"
  },
  {
    icon: Car,
    title: "Luxury Vehicles",
    description: "Premium cars for special occasions and VIP service"
  },
  {
    icon: Shield,
    title: "Medical Transportation",
    description: "Non-emergency medical appointments and hospital visits"
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional transportation solutions for every need. From airport transfers
              to corporate travel, we've got you covered with our comprehensive services.
            </p>
            <Button size="lg" asChild>
              <Link href="/#booking">Book a Ride Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="max-w-7xl mx-auto">
                  <Card className={`overflow-hidden ${service.popular ? "border-primary border-2" : ""}`}>
                    {service.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                        ⭐ Most Popular Service
                      </div>
                    )}
                    <div className={`grid lg:grid-cols-2 gap-8 p-8 lg:p-12 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                      {/* Content */}
                      <div className={isEven ? "" : "lg:col-start-2"}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <h2 className="text-3xl font-bold">{service.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-6">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <div className="text-sm text-muted-foreground">Pricing</div>
                            <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                          </div>
                          <Button asChild>
                            <Link href="/#booking">
                              Book Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                        <Card className="p-6 bg-muted/50 h-full">
                          <h3 className="font-semibold text-lg mb-4">Why Choose This Service?</h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                  <span className="text-primary font-bold text-sm">{idx + 1}</span>
                                </div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized transportation solutions for unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                All Services Include
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Fully Insured</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive insurance coverage for your peace of mind
                  </p>
                </div>
                <div>
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Professional Drivers</h3>
                  <p className="text-sm text-muted-foreground">
                    Background-checked, trained, and experienced drivers
                  </p>
                </div>
                <div>
                  <Car className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Clean Vehicles</h3>
                  <p className="text-sm text-muted-foreground">
                    Well-maintained, sanitized vehicles for your comfort
                  </p>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">Have Questions? Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Choose the service that fits your needs and book in minutes.
            Available 24/7 for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#booking">Book Online</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="tel:+15551234567">Call: +1 (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
