import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Atom, Zap, Brain, Shield, Target, BarChart3, Smartphone, CheckCircle2, Check, TrendingUp, Clock, DollarSign, Network } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze thousands of social media sources, news feeds, and market indicators in real-time to identify the next big opportunities before they explode.",
      features: [
        "Twitter sentiment analysis",
        "Discord monitoring",
        "Telegram tracking",
        "News aggregation"
      ]
    },
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Execute trades in milliseconds with our optimized smart contracts. Front-run opportunities with MEV protection and gas optimization that gives you the edge over manual traders.",
      features: [
        "Sub-second execution",
        "MEV protection",
        "Gas optimization",
        "Smart slippage control"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Bank-grade security with multi-signature wallets, encrypted private keys, and smart contract audits. Your funds are protected by industry-leading security protocols.",
      features: [
        "Multi-sig wallets",
        "Encrypted keys",
        "Audited contracts",
        "Insurance coverage"
      ]
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Set custom parameters for entry and exit points. Our algorithms identify the perfect moment to enter positions based on technical analysis, social sentiment, and market momentum.",
      features: [
        "Custom stop-loss",
        "Take-profit automation",
        "Risk management",
        "Position sizing"
      ]
    },
    {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Comprehensive dashboard with live performance metrics, profit/loss tracking, and detailed trade history. Monitor your portfolio's performance with institutional-grade analytics.",
        features: [
          "Live P&L tracking",
          "Performance metrics",
          "Trade history",
          "Risk analytics"
        ]
      },
      {
        icon: Smartphone,
        title: "Mobile Ready",
        description: "Trade on-the-go with our mobile-optimized interface. Receive instant notifications for new opportunities and manage your positions from anywhere in the world.",
        features: [
          "Mobile notifications",
          "Cross-platform sync",
          "Offline mode",
          "Widget support"
        ]
      }
  ];

  

  const stats = [
    { icon: Target, value: "99.7%", label: "Success Rate" },
    { icon: Clock, value: "<50ms", label: "Execution Time" },
    { icon: DollarSign, value: "$2.8B+", label: "Volume Processed" },
    { icon: Network, value: "24/7", label: "Market Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Advanced Trading Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cutting-Edge <span className="text-primary">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful tools and technologies that make Prime Sniper the most advanced crypto sniping platform in the market.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              // Special styling for AI-Powered Analysis card (first card)
              
                return (
                  <Card 
                    key={index} 
                    className="relative overflow-hidden border border-border/50 bg-[#0f0f1e] hover:border-primary/50 transition-all duration-300 rounded-xl"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0',
                      backgroundColor:'rgb(17 23 35)'
                    }}
                  >
                    <CardContent className="p-8 relative z-10">
                      {/* Header with icon and title */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Purple square icon with rounded corners */}
                        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      
                      {/* Description paragraph */}
                      <p className="text-[#b0b0b0] mb-6 leading-relaxed text-base">
                        {feature.description}
                      </p>
                      
                      {/* Features list with green checkmarks in circles */}
                      <div className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            {/* Green circle with white checkmark */}
                            <div className="w-5 h-5 rounded-full border-2 border-success flex items-center justify-center flex-shrink-0 bg-transparent">
                              <Check className="w-3 h-3 text-white stroke-[3]" />
                            </div>
                            <span className="text-white text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              
            })}
          </div>
        </div>
      </section>

    

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Sniping?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already maximizing their profits with Prime Sniper.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Zap className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;
