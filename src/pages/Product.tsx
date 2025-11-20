import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Product = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src="/therma-logo-transparent.png" alt="THERMA Logo" className="h-16 w-16" />
              <h1 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  THERMA System
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Advanced copper-tube cooling technology that stabilizes panel temperature and repurposes waste heat for dual-energy utilization
            </p>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">System Components</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Solar Panel</h3>
              <p className="text-muted-foreground">Photovoltaic module with integrated copper-tube cooling system mounted on rear surface</p>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Temperature Sensors</h3>
              <p className="text-muted-foreground">Continuous monitoring of panel and fluid temperatures for precise thermal control</p>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Cooling Fluid System</h3>
              <p className="text-muted-foreground">Regulated pump circulates coolant through copper tubes to extract and transfer heat</p>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Microcontroller</h3>
              <p className="text-muted-foreground">Intelligent control system that regulates pump speed based on temperature readings</p>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Copper Tubes</h3>
              <p className="text-muted-foreground">High-conductivity heat channels mounted behind panel for efficient thermal extraction</p>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mb-4">6</div>
              <h3 className="text-xl font-semibold mb-2">Heat Recovery Unit</h3>
              <p className="text-muted-foreground">Secondary system for water heating or Stirling engine power generation</p>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Heat Detection</h3>
                <p className="text-muted-foreground">
                  Temperature sensors continuously monitor panel surface temperature. When heat builds up, the cooling system activates automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Control</h3>
                <p className="text-muted-foreground">
                  Microcontroller compares current temperature against optimal range and dynamically regulates pump speed for precise cooling.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adaptive Cooling</h3>
                <p className="text-muted-foreground">
                  Variable-speed pump increases flow rate, circulating coolant through copper tube loop to extract heat from panel surface.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Heat Recovery & Monitoring</h3>
                <p className="text-muted-foreground">
                  Hot fluid is directed to secondary applications (water heating or energy generation). System continuously logs data for real-time monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Applications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center border-border bg-card">
              <h3 className="font-semibold mb-2">Residential</h3>
              <p className="text-sm text-muted-foreground">Rooftop solar systems</p>
            </Card>
            <Card className="p-6 text-center border-border bg-card">
              <h3 className="font-semibold mb-2">Commercial</h3>
              <p className="text-sm text-muted-foreground">Industrial rooftop arrays</p>
            </Card>
            <Card className="p-6 text-center border-border bg-card">
              <h3 className="font-semibold mb-2">Off-Grid</h3>
              <p className="text-sm text-muted-foreground">Remote installations</p>
            </Card>
            <Card className="p-6 text-center border-border bg-card">
              <h3 className="font-semibold mb-2">Hybrid Systems</h3>
              <p className="text-sm text-muted-foreground">Solar-thermal integration</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Improved electrical efficiency through temperature stabilization",
              "Reduced thermal stress extends panel lifespan significantly",
              "Dual-energy utilization: electricity + recovered heat",
              "Cost-effective alternative to expensive cooling systems",
              "Environmentally clean—no harmful refrigerants",
              "Scalable design for any installation size",
              "Real-time monitoring and intelligent flow control",
              "Closed-loop system minimizes maintenance needs"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Future Development
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Advanced cooling fluids (nanofluids, PCM)",
              "AI and machine-learning predictive cooling",
              "Wireless IoT monitoring and diagnostics",
              "Large-scale solar farm deployment",
              "Integration with hybrid renewable systems",
              "Cloud-based analytics and automated maintenance"
            ].map((scope, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{scope}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
