import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    desc: "Perfect for small businesses starting their digital journey.",
    features: ["SEO Foundation Setup", "Google My Business Optimization", "Monthly Performance Report", "2 Blog Posts / Month", "Basic Social Media Management", "Email Support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/month",
    desc: "For businesses ready to scale and dominate their market.",
    features: ["Advanced SEO Strategy", "Google Ads Management", "Social Media Marketing (3 Platforms)", "4 Blog Posts / Month", "Conversion Rate Optimization", "Weekly Strategy Calls", "Custom Analytics Dashboard", "Dedicated Account Manager"],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-service marketing for ambitious businesses.",
    features: ["Everything in Growth", "Multi-Channel PPC Campaigns", "Advanced Content Strategy", "Video Marketing", "Influencer Partnerships", "Priority Support", "Quarterly Business Reviews", "Custom Integrations"],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <SectionHeading label="Pricing" title="Transparent Pricing, Real Results" description="No hidden fees. No long-term contracts. Just results-driven marketing." />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-xl border p-8 transition-all ${
                  plan.popular
                    ? "border-primary bg-card shadow-glow scale-105"
                    : "border-border bg-card shadow-card"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "hero-outline"} className="w-full mt-8" asChild>
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
