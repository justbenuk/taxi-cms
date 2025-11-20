import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Headphones
} from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with QuickRide Taxi. We're available 24/7 to answer your questions and assist with bookings.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Available 24/7 for immediate assistance",
    action: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@quickride.com", "support@quickride.com"],
    description: "We'll respond within 24 hours",
    action: "mailto:info@quickride.com"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Taxi Street", "Transport City, TC 12345"],
    description: "Monday - Friday, 9 AM - 6 PM",
    action: "#location"
  }
];

const departments = [
  {
    name: "Customer Support",
    description: "General inquiries and booking assistance",
    email: "support@quickride.com",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Corporate Sales",
    description: "Business accounts and corporate partnerships",
    email: "corporate@quickride.com",
    phone: "+1 (555) 234-5678"
  },
  {
    name: "Driver Recruitment",
    description: "Join our team of professional drivers",
    email: "careers@quickride.com",
    phone: "+1 (555) 345-6789"
  },
  {
    name: "Billing & Payments",
    description: "Invoice questions and payment support",
    email: "billing@quickride.com",
    phone: "+1 (555) 456-7890"
  }
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We currently serve over 100 cities across the region. Check our service map or call us to confirm availability in your area."
  },
  {
    question: "How do I book a ride?",
    answer: "You can book through our website, mobile app, or by calling our 24/7 dispatch center at +1 (555) 123-4567."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, debit cards, and digital wallets including Apple Pay and Google Pay."
  },
  {
    question: "Can I schedule a ride in advance?",
    answer: "Yes! You can schedule rides up to 30 days in advance through our booking form or by calling us directly."
  }
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or need assistance? We're here to help 24/7.
              Choose the best way to reach us below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">
                    {method.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Hours */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Service Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ride Service</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Office</span>
                    <span className="font-medium">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-medium">24/7</span>
                  </div>
                </div>
              </Card>

              {/* Emergency */}
              <Card className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Need Immediate Help?</h3>
                </div>
                <p className="mb-4 opacity-90">
                  For urgent booking or assistance, call us now:
                </p>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </a>
                </Button>
              </Card>

              {/* Social */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest news and offers on social media.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Facebook">
                      <span className="text-xl">f</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <span className="text-xl">𝕏</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Instagram">
                      <span className="text-xl">📷</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn">
                      <span className="text-xl">in</span>
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact by Department
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach out to the right team for faster assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-muted-foreground mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${dept.email}`} className="hover:text-primary">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions. Can't find what you're looking for? Contact us!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground mb-2">
                123 Taxi Street, Transport City, TC 12345
              </p>
              <p className="text-muted-foreground mb-6">
                Office Hours: Monday - Friday, 9:00 AM - 6:00 PM
              </p>
              <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Map integration would go here - Google Maps, Mapbox, etc.]
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
