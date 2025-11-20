import { Card } from "@/components/ui/card";
import BookingForm from "@/components/booking/booking-form";

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Book Your Ride
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you with confirmation shortly.
            Available 24/7 for your convenience.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <BookingForm />
        </Card>
      </div>
    </section>
  );
}
