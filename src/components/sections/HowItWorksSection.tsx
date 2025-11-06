const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description: "Securely connect your wallet and set your trading parameters",
    },
    {
      number: "02",
      title: "AI Analyzes Markets",
      description: "Our AI monitors thousands of sources for emerging opportunities",
    },
    {
      number: "03",
      title: "Automated Execution",
      description: "Execute perfect entries automatically or get instant alerts",
    },
    {
      number: "04",
      title: "Maximize Profits",
      description: "Watch your portfolio grow with intelligent trade management",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our simple 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - positioned exactly in the middle of circles, extends beyond */}
            <div 
              className="hidden lg:block absolute h-0.5 bg-border" 
              style={{ 
                top: '32px', // Half of circle height (64px / 2 = 32px) - centers line through middle
                left: '-40px', // Extend beyond first circle
                right: '-40px', // Extend beyond last circle
                zIndex: 0
              }}
            ></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center space-y-4">
                {/* Step Number Circle - vibrant purple with white number */}
                <div 
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold 
                    text-white bg-primary" 
                        
                >
                  {step.number}
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
