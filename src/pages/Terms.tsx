import Header from "@/components/Header";
import { FileText, AlertTriangle, Shield } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              <FileText className="w-4 h-4" />
              Legal Terms
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Please read these terms carefully before using Prime Sniper. By using our service, you agree to be bound by these terms and conditions.
            </p>

            {/* Risk Warning Box */}
            <div className="border border-destructive/50 bg-destructive/5 rounded-lg p-6 text-left">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Important Risk Warning</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cryptocurrency trading involves substantial risk of loss. Never invest more than you can afford to lose. Past performance does not guarantee future results. Please trade responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>By accessing and using Prime Sniper ('the Service'), you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
                <p>These Terms of Service may be updated from time to time without prior notice. Your continued use of the Service constitutes acceptance of any changes.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">2. Service Description</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>Prime Sniper provides AI-powered cryptocurrency trading tools and analytics for automated market analysis and trade execution.</p>
                <p>The Service includes real-time market monitoring, sentiment analysis, and automated trading capabilities through smart contracts.</p>
                <p>We do not guarantee profits or trading success. All trading involves substantial risk of loss.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>You are responsible for maintaining the confidentiality of your account credentials and private keys.</p>
                <p>You must comply with all applicable laws and regulations in your jurisdiction regarding cryptocurrency trading.</p>
                <p>You acknowledge that cryptocurrency trading involves high risk and you may lose all invested capital.</p>
                <p>You agree not to use the Service for any illegal or unauthorized purpose.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">4. Risk Disclosure</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>Cryptocurrency trading is highly speculative and involves substantial risk of loss.</p>
                <p>Past performance does not guarantee future results. Market conditions can change rapidly.</p>
                <p>You should never invest more than you can afford to lose.</p>
                <p>The Service uses automated algorithms which may malfunction or perform unexpectedly.</p>
                <p>Smart contract risks include but are not limited to bugs, exploits, and network congestion.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>Prime Sniper shall not be liable for any direct, indirect, incidental, special, or consequential damages.</p>
                <p>We do not guarantee the accuracy, completeness, or timeliness of market data or trading signals.</p>
                <p>The maximum liability shall not exceed the amount paid by you for the Service in the preceding 12 months.</p>
                <p>We are not responsible for losses due to market volatility, technical failures, or external factors.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">6. Privacy and Data Protection</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>We collect and process personal data in accordance with our Privacy Policy.</p>
                <p>Trading data and wallet addresses may be stored for analytics and service improvement.</p>
                <p>We implement industry-standard security measures to protect your data.</p>
                <p>We do not sell or share personal information with third parties without consent.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">7. Intellectual Property</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>All content, algorithms, and software are the intellectual property of Prime Sniper.</p>
                <p>You are granted a limited, non-exclusive license to use the Service for personal trading purposes.</p>
                <p>Reverse engineering, copying, or redistributing our software is strictly prohibited.</p>
                <p>All trademarks and logos are the property of their respective owners.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">8. Account Termination</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>We reserve the right to suspend or terminate accounts for violation of these terms.</p>
                <p>You may cancel your account at any time by contacting our support team.</p>
                <p>Upon termination, you must cease all use of the Service and delete any downloaded software.</p>
                <p>We are not liable for any losses resulting from account termination.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">9. Governing Law</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>These terms are governed by the laws of the jurisdiction where Prime Sniper is incorporated.</p>
                <p>Any disputes shall be resolved through binding arbitration in accordance with commercial arbitration rules.</p>
                <p>If any provision of these terms is found unenforceable, the remaining provisions shall remain in effect.</p>
                <p>No waiver of any term shall be deemed a continuing waiver of such term or any other term.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div 
              className="space-y-4 p-6 rounded-lg border border-border/50 relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                backgroundColor: 'rgb(17 23 35)'
              }}
            >
              <h2 className="text-2xl font-bold text-white">10. Contact Information</h2>
              <div className="space-y-3 text-[#b0b0b0]">
                <p>For questions about these Terms of Service, please contact us at legal@primesniper.com</p>
                <p>For technical support, email support@primesniper.com</p>
                <p>For partnership inquiries, reach out to partnerships@primesniper.com</p>
                <p className="font-medium">Last updated: January 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              <Shield className="w-4 h-4" />
              Legal Compliance
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              Prime Sniper operates in compliance with applicable laws and regulations. We reserve the right to restrict access in jurisdictions where our services may not be legally available.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>© 2024 Prime Sniper LLC. All rights reserved.</p>
              <p>This document was last updated on January 15, 2024. For the most current version, please visit our website.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
