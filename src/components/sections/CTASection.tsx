import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, CheckCircle } from "lucide-react";
import  {ConnectWalletDialog}  from "@/components/ConnectWalletDialog";


const CTASection = () => {
  const benefits = [
    "No setup fees",
    "Cancel anytime",
    "24/7 support",
  ];

  const [walletDialogOpen, setWalletDialogOpen] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Start <span className="text-primary">Winning?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful traders who are already using Prime Sniper to maximize their crypto profits. Don't miss the next big opportunity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
            onClick={() => setWalletDialogOpen(true)}>
              <Play className="w-5 h-5 mr-2" />
              Start Sniping Now
              <span className="ml-2">→</span>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              <TrendingUp className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-success font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConnectWalletDialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen} />
    </section>
  );
};

export default CTASection;
