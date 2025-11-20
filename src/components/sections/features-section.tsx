import { Card } from "@/components/ui/card";
import {
  Shield,
  Clock,
  CreditCard,
  MapPin,
  Users,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Insured",
    description: "All our vehicles are fully insured and drivers are background-checked for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service ensures you can book a ride whenever you need one, day or night."
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Accept all major credit cards, digital wallets, and cash for your convenience."
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time tracking lets you know exactly where your driver is and when they'll arrive."
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced, courteous drivers committed to providing excellent customer service."
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Certified",
    description: "All drivers hold valid commercial licenses and undergo regular training programs."
  },

];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-yellow-300">Taxi Co?</span>
          </h2>
          <p className=" text-muted-foreground">
            We combine reliability, safety, and comfort to deliver the best transportation
            experience for our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
