import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search, BarChart3, Megaphone, Globe, ArrowRight, Star,
  TrendingUp, Users, Target, CheckCircle2
} from "lucide-react";

const stats = [
  { value: "250+", label: "Clients Served" },
  { value: "3.2x", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
  { value: "15M+", label: "Leads Generated" },
];

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Dominate search rankings and drive organic traffic that converts." },
  { icon: BarChart3, title: "Google Ads (PPC)", desc: "Maximize ROI with precision-targeted paid campaigns." },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Build brand awareness and engagement across all platforms." },
  { icon: Globe, title: "Web Development", desc: "High-converting websites built for speed and results." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechStart", text: "Clear Craft doubled our organic traffic in just 4 months. Their data-driven approach is unmatched.", rating: 5 },
  { name: "Marcus Johnson", role: "Owner, LocalEats", text: "Our Google Ads campaigns went from losing money to 4x ROAS. Incredible team.", rating: 5 },
  { name: "Priya Sharma", role: "Founder, StyleBox", text: "From zero to 50K monthly visitors. They truly understand e-commerce growth.", rating: 5 },
];

const caseStudies = [
  { title: "E-commerce Revenue +340%", category: "SEO + PPC", result: "From $50K to $220K monthly revenue" },
  { title: "SaaS Leads Tripled", category: "Content + SEO", result: "312% increase in qualified leads" },
  { title: "Local Business Dominance", category: "Local SEO", result: "#1 Google Maps ranking in 60 days" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              #1 Digital Marketing Agency
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
              Grow Your Business with{" "}
              <span className="text-gradient-primary">Data-Driven</span>{" "}
              Marketing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help small businesses, startups, and local companies generate more leads, increase revenue, and dominate their market with proven digital strategies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-audit">Get Your Free SEO Audit <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Book a Strategy Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container py-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <div className="font-display text-3xl font-bold text-gradient-primary md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="Services That Drive Real Results"
            description="From search engine optimization to social media management, we offer everything you need to grow your online presence."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <SectionHeading
            label="Case Studies"
            title="Proven Results for Real Businesses"
            description="See how we've helped companies like yours achieve extraordinary growth."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.title}
                variants={item}
                className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{cs.category}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">{cs.title}</h3>
                <p className="mt-2 text-muted-foreground">{cs.result}</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  View case study <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Testimonials"
            title="Trusted by Growing Businesses"
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-display font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-primary p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Get a free SEO audit and discover exactly how to outrank your competitors.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold" asChild>
                <Link to="/free-audit">Get Free Audit <ArrowRight size={16} /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Blog"
            title="Marketing Insights & Tips"
            description="Stay ahead of the curve with our latest articles on digital marketing."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "10 SEO Strategies That Actually Work in 2026", category: "SEO" },
              { title: "How to 3x Your Google Ads ROI", category: "PPC" },
              { title: "The Complete Social Media Playbook", category: "Social Media" },
            ].map((post) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30"
              >
                <div className="h-48 bg-muted grid-pattern" />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <Link to="/blog" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-border bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Get Marketing Tips Weekly</h3>
              <p className="text-sm text-muted-foreground mt-1">Join 10,000+ marketers. No spam, ever.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="default">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
