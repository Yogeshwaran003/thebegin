import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search, BarChart3, Megaphone, Globe, ArrowRight, CheckCircle2,
  LineChart, PenTool, Mail, Smartphone
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Climb to the top of Google with our comprehensive SEO strategies including technical SEO, content optimization, and link building.",
    features: ["Keyword Research & Strategy", "Technical SEO Audits", "On-Page Optimization", "Link Building Campaigns"],
  },
  {
    icon: BarChart3,
    title: "Google Ads (PPC)",
    desc: "Maximize your ad spend with precision-targeted campaigns that drive qualified leads and real conversions.",
    features: ["Campaign Strategy & Setup", "A/B Testing & Optimization", "Conversion Tracking", "Monthly Performance Reports"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build a loyal following and drive engagement across Instagram, Facebook, LinkedIn, and TikTok.",
    features: ["Content Calendar Planning", "Community Management", "Paid Social Campaigns", "Influencer Partnerships"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Beautiful, fast, conversion-optimized websites that turn visitors into customers.",
    features: ["Custom Website Design", "Landing Page Development", "E-Commerce Solutions", "Performance Optimization"],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    desc: "Attract and retain customers with valuable content that establishes your authority.",
    features: ["Blog Writing & Strategy", "Video Content", "Whitepapers & E-books", "Email Newsletters"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Nurture leads and drive repeat sales with automated email sequences that convert.",
    features: ["Drip Campaign Design", "List Segmentation", "A/B Testing", "Analytics & Reporting"],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionHeading
              label="Our Services"
              title="Everything You Need to Grow Online"
              description="Comprehensive digital marketing solutions tailored for small businesses, startups, and local companies."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                className="rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Not Sure Which Service You Need?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Get a free marketing audit and we'll recommend a custom strategy for your business.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-audit">Get Free Audit <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
