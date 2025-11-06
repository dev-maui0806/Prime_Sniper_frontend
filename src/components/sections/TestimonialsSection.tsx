import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Prime Sniper helped me catch the early pump on 3 tokens this week. The AI analysis is incredibly accurate.",
      author: "Alex Martinez",
      role: "DeFi Trader",
      profit: "+2,847%",
    },
    {
      rating: 5,
      text: "The automated execution saved me from missing multiple opportunities. Game-changing technology.",
      author: "Sarah Chen",
      role: "Crypto Investor",
      profit: "+1,234%",
    },
    {
      rating: 5,
      text: "Finally, a tool that actually works. The social sentiment analysis is spot on every time.",
      author: "Mike Johnson",
      role: "Professional Trader",
      profit: "+987%",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our community is saying about their success
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 border border-border rounded-2xl p-8 space-y-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">{testimonial.profit}</div>
                  <div className="text-xs text-muted-foreground">Profit</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
