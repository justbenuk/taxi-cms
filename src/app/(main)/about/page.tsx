import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Star
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about QuickRide Taxi - your trusted transportation partner with over 15 years of experience providing safe, reliable rides.",
};

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. All vehicles are regularly inspected and drivers are thoroughly vetted."
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We treat every customer like family, ensuring comfortable and pleasant experiences on every ride."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to maintaining the highest standards in service quality and professional conduct."
  },
  {
    icon: Users,
    title: "Community",
    description: "Proud to serve our community and contribute to local economic growth and sustainability."
  }
];

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with just 10 vehicles and a vision to revolutionize local transportation."
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Grew to 100+ vehicles and expanded service to 5 neighboring cities."
  },
  {
    year: "2016",
    title: "Technology Integration",
    description: "Launched mobile app and GPS tracking for enhanced customer experience."
  },
  {
    year: "2020",
    title: "Going Green",
    description: "Introduced electric and hybrid vehicles to reduce our carbon footprint."
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Now serving 100+ cities with 500+ vehicles and 50,000+ satisfied customers."
  }
];

const team = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
    image: "👨‍💼",
    bio: "15+ years experience in transportation industry"
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    image: "👩‍💼",
    bio: "Expert in fleet management and logistics"
  },
  {
    name: "Michael Chen",
    role: "Technology Lead",
    image: "👨‍💻",
    bio: "Building innovative solutions for better rides"
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success",
    image: "👩‍🎨",
    bio: "Dedicated to exceptional customer experiences"
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About QuickRide Taxi
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 2008, we've been committed to providing safe, reliable, and comfortable
              transportation services to our community. With over 15 years of experience,
              we're your trusted partner for all your travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#booking">Book a Ride</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Professional Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                To provide safe, reliable, and affordable transportation services that exceed
                customer expectations while supporting our local communities and promoting
                sustainable practices.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and preferred transportation service provider, recognized
                for innovation, exceptional customer service, and positive community impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to industry leadership - here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 min-h-[60px]" />
                    )}
                  </div>
                  <Card className="p-6 flex-1 group-hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to delivering exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Why Choose QuickRide?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully licensed operation with comprehensive insurance coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Background Checked Drivers</h3>
                    <p className="text-sm text-muted-foreground">
                      All drivers undergo thorough background and safety checks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock service for all your transportation needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Competitive Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Affordable rates without compromising on quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Modern Fleet</h3>
                    <p className="text-sm text-muted-foreground">
                      Well-maintained vehicles with latest safety features
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Customer Satisfaction</h3>
                    <p className="text-sm text-muted-foreground">
                      Rated 4.9/5 stars by thousands of happy customers
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust QuickRide for their transportation needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/#booking">Book Your Ride Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
