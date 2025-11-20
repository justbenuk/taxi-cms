import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "👩‍💼",
    rating: 5,
    text: "I've been using QuickRide for my daily commute for over a year now. The drivers are always professional, and the cars are immaculate. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Frequent Traveler",
    image: "👨‍💻",
    rating: 5,
    text: "The airport transfer service is exceptional. They track my flights and adjust pickup times automatically. Never missed a flight thanks to their reliability."
  },
  {
    name: "Emily Rodriguez",
    role: "Event Planner",
    image: "👩‍🎨",
    rating: 5,
    text: "We used QuickRide for transportation at our corporate event. The coordination was seamless, and all our guests were impressed with the service quality."
  },
  {
    name: "David Thompson",
    role: "Small Business Owner",
    image: "👨‍💼",
    rating: 5,
    text: "The corporate plan has been a game-changer for our team. Easy billing, priority booking, and excellent customer support. Worth every penny!"
  },
  {
    name: "Lisa Anderson",
    role: "Teacher",
    image: "👩‍🏫",
    rating: 5,
    text: "Safe, affordable, and always on time. I feel comfortable recommending QuickRide to my friends and family. The drivers are courteous and respectful."
  },
  {
    name: "James Wilson",
    role: "Retiree",
    image: "👴",
    rating: 5,
    text: "As a senior citizen, I appreciate the extra care the drivers take. They help with luggage and make sure I'm comfortable. Outstanding service!"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-yellow-300">Customers</span> Say
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what real customers have to say about their
            experience with QuickRide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground relative z-10 pl-4">{testimonial.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">4.5</div>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="text-left border-l pl-6">
                <div className="font-semibold">Excellent Rating</div>
                <div className="text-sm text-muted-foreground">
                  Based on 1,237 customer reviews
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
