import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Medal, Code, Globe, TrendingUp, Shield, Users, Zap, Linkedin, Github } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-center mb-6">
            <Button variant="outline" className="rounded-full border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            Who <span className="text-primary">We Are</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            We're a team of experienced traders, engineers, and AI researchers united by our passion for building the future of automated crypto trading.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center mb-16 leading-relaxed">
            To democratize access to institutional-grade trading tools and level the playing field for retail crypto traders. We believe everyone should have access to the same advanced algorithms and real-time intelligence that hedge funds use to generate alpha in the markets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Medal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for perfection in every feature we build
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of trading technology
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                Making advanced tools available to everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section 
        className="py-20 px-6 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">Meet the Team</h2>
          <p className="text-lg text-primary/80 text-center mb-16">The brilliant minds behind Prime Sniper</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Alex Chen */}
            <Card className="p-6 bg-card/50 border-border/50"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-2xl font-bold shrink-0">
                  AC
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
                  <p className="text-primary text-sm mb-3">CEO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Former Goldman Sachs quantitative trader with 8+ years experience in algorithmic trading. MIT graduate with expertise in machine learning and financial markets.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sarah Rodriguez */}
            <Card className="p-6 bg-card/50 border-border/50"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-2xl font-bold shrink-0">
                  SR
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Sarah Rodriguez</h3>
                  <p className="text-primary text-sm mb-3">CTO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Ex-Google senior engineer specializing in distributed systems and blockchain technology. Led development of high-frequency trading systems at Jane Street.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Marcus Thompson */}
            <Card className="p-6 bg-card/50 border-border/50"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-2xl font-bold shrink-0">
                  MT
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Marcus Thompson</h3>
                  <p className="text-primary text-sm mb-3">Head of AI Research</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    PhD in Computer Science from Stanford. Former research scientist at DeepMind with publications in reinforcement learning and financial forecasting.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Elena Volkov */}
            <Card className="p-6 bg-card/50 border-border/50"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-2xl font-bold shrink-0">
                  EV
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Elena Volkov</h3>
                  <p className="text-primary text-sm mb-3">Head of Security</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Cybersecurity expert with 10+ years protecting financial infrastructure. Former security lead at Coinbase with expertise in smart contract auditing.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">Our Values</h2>
          <p className="text-lg text-muted-foreground text-center mb-16">The principles that guide everything we do</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously push the boundaries of what's possible in crypto trading, leveraging cutting-edge AI and blockchain technology.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Paramount</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your funds and data security is our top priority. We implement bank-grade security measures and undergo regular third-party audits.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build for our community of traders, listening to feedback and continuously improving our platform based on real user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Ready to be part of the future of crypto trading? Start your journey with Prime Sniper today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Zap className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
