import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Heart, ArrowRight } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy we build is designed around measurable outcomes and ROI." },
  { icon: Users, title: "Client-First", desc: "Your success is our success. We treat every client like a partner." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends so you're always one step ahead of competitors." },
  { icon: Heart, title: "Transparency", desc: "No fluff, no hidden fees. Clear reporting and honest communication." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & CEO", bio: "15+ years in digital marketing. Previously led marketing at two Fortune 500 companies." },
  { name: "Jordan Lee", role: "Head of SEO", bio: "Google-certified expert who has driven over $50M in organic revenue." },
  { name: "Sam Patel", role: "PPC Director", bio: "Managed $20M+ in ad spend with an average 4x ROAS across all accounts." },
  { name: "Morgan Kim", role: "Creative Director", bio: "Award-winning designer with a passion for conversion-focused design." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <SectionHeading label="About Us" title="We're on a Mission to Help Businesses Thrive Online" description="Founded in 2018, Clear Craft has helped over 250 businesses achieve measurable growth through data-driven digital marketing." />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading label="Our Values" title="What Sets Us Apart" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3"><v.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeading label="Our Team" title="Meet the Experts Behind Your Growth" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-muted grid-pattern" />
                <h3 className="font-display font-semibold text-foreground">{t.name}</h3>
                <p className="text-xs text-primary font-medium">{t.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Ready to Work With Us?</h2>
          <p className="mt-4 text-muted-foreground">Let's build something great together.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/contact">Get in Touch <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
