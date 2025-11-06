import { Brain, Zap, Shield, Target, Clock, BarChart3, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Market Analysis",
      description: "Advanced algorithms analyze thousands of sources for perfect entry points",
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Execute trades in milliseconds with optimized smart contracts",
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "Bank-grade security with multi-signature wallet protection",
    },
  ];

  const stats = [
    {
      icon: Target,
      value: "99.7%",
      label: "Success Rate",
    },
    {
      icon: Clock,
      value: "<50ms",
      label: "Execution Speed",
    },
    {
      icon: BarChart3,
      value: "$2.8B+",
      label: "Volume Traded",
    },
    {
      icon: Users,
      value: "15K+",
      label: "Active Users",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose <span className="text-primary">Prime Sniper</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced technology meets intuitive design for the ultimate crypto trading experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <stat.icon className="w-8 h-8 text-primary" />
              <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
