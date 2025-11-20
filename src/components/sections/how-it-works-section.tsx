import { Card } from "@/components/ui/card";
import { Search, Calendar, Car, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Choose Your Service",
    description: "Select from our range of services including airport transfers, city rides based on your needs."
  },
  {
    icon: Calendar,
    step: "02",
    title: "Book Your Ride",
    description: "Fill in your pickup location, destination, date, and time. Provide your contact details for confirmation."
  },
  {
    icon: Car,
    step: "03",
    title: "Get Picked Up",
    description: "A professional driver will arrive at your location on time. Track your driver in real-time via our app or SMS."
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Enjoy the Ride",
    description: "Sit back and relax in comfort. Pay easily with cash, card, or digital wallet. Rate your experience when done."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-yellow-300">Works</span>
          </h2>
          <p className="text-muted-muted">
            Booking a ride with Taxi Co is simple and straightforward. Follow these easy steps
            to get on your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line - Hidden on mobile, shown on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10 ">
                  <div className="relative mb-4">
                    <div className="bg-yellow-300 text-black w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 " />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
