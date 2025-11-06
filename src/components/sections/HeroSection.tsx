import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Play, TrendingUp } from "lucide-react";
import Chart from "@/components/Chart";
import  {ConnectWalletDialog}  from "@/components/ConnectWalletDialog";

const HeroSection = () => {
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">AI-Powered Crypto Sniping</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Perfect Crypto Snipes{" "}
                <span className="text-primary">Every Time</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advanced AI-powered sniping tools that analyze thousands of social sources 24/7. Get perfect entry points with real-time intelligence and automated execution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Connect your crypto wallet to start trading instantly. Secure connection with all major wallets supported for seamless crypto sniping.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              onClick={() => setWalletDialogOpen(true)}>
                <Play className="w-5 h-5 mr-2" />
                Start Sniping Now
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary"
              onClick={() => setWalletDialogOpen(true)}>
                <TrendingUp className="w-5 h-5 mr-2" />
                Use Our Tool
              </Button>
            </div>
          </div>

          {/* Right Content - Chart Visualization */}
          <div className="relative">
            <div className="bg-secondary/50 backdrop-blur rounded-2xl border border-border p-4 overflow-hidden">
              <Chart />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-success/20 blur-xl"></div>
          </div>
        </div>
      </div>
      <ConnectWalletDialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen} />
    </section>
    
  );

  
};




export default HeroSection;
