import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm mb-6">
              <img src="/therma-logo-transparent.png" alt="Logo" className="h-4 w-4" />
              <span>About THERMA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Transforming Solar Efficiency
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Therma is an innovative solar cooling technology that stabilizes panel temperature, boosts electrical efficiency, and repurposes waste heat for meaningful applications.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-primary">The Problem</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Elevated temperature is one of the most critical factors limiting solar panel performance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-primary font-semibold">70–80% of solar radiation</span> becomes heat, not electricity</li>
                <li>High temperatures cause voltage loss and reduced efficiency</li>
                <li>Heat accelerates material degradation and shortens system lifespan</li>
                <li>Hot climates face highest solar demand but also highest losses</li>
                <li>Existing cooling methods are expensive, complex, or impractical</li>
              </ul>
              <p className="mt-6 font-semibold text-foreground">
                There is no widespread, low-cost, scalable thermal management method for PV panels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Solution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Therma introduces a copper-tube fluid circulation mechanism mounted behind the solar panel:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Efficient Heat Transfer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Copper tubes act as high-conductivity heat channels</li>
                  <li>• Coolant fluid circulates via regulated pump</li>
                  <li>• Extracts excess heat from panel surface</li>
                  <li>• Maintains optimal panel temperature</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Intelligent Monitoring</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sensors continuously track temperature</li>
                  <li>• Microcontroller regulates flow automatically</li>
                  <li>• Real-time adjustments for optimal cooling</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-accent">Heat Recovery</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Recovered heat repurposed for water heating</li>
                  <li>• Can drive Stirling engine for mechanical energy</li>
                  <li>• Dual-benefit energy utilization</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-primary">Closed-Loop System</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete thermal management cycle</li>
                  <li>• Environmentally clean—no refrigerants</li>
                  <li>• Scalable for all installation sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To provide practical, scalable thermal management solutions that maximize solar panel efficiency and extend system lifespan through innovative heat extraction and reuse.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To become the leading solution for solar thermal management, enabling widespread adoption of efficient, sustainable solar energy in hot-climate regions worldwide.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Innovation, sustainability, and practicality. We believe effective thermal management should be affordable, scalable, and accessible to all solar installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sustainability Impact
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-bold text-primary mb-2">Improved Efficiency</h3>
                <p className="text-muted-foreground">Stabilizes panel temperature to restore optimal electrical performance and increase energy output</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-bold text-secondary mb-2">Extended Lifespan</h3>
                <p className="text-muted-foreground">Reduces thermal stress on panel components, significantly extending operational life and ROI</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-bold text-accent mb-2">Dual Energy Use</h3>
                <p className="text-muted-foreground">Repurposes extracted heat for water heating or mechanical energy, maximizing total system efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
