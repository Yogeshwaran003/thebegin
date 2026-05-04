import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, CreditCard, ArrowRight, Globe } from "lucide-react";

const highlights = [
  "Learn high-converting digital marketing strategies",
  "Build a career in SEO, paid media, and growth marketing",
  "Hands-on projects with real campaign experience",
  "Live mentorship and expert feedback",
  "Payment plans available for fast enrollment",
];

const Opportunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                New Course Opportunity
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl text-foreground leading-tight">
                Find Your Digital Marketing Opportunity
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                Jump into our digital marketing course designed for ambitious learners who want to grow traffic, conversions, and revenue. Choose the right plan, secure your spot, and pay with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <Link to="https://pages.razorpay.com/pl_Skqr0VCdUFygJ3/view">Pay Now</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Book a Call</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="flex items-center gap-3 text-foreground">
                <CreditCard className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Course Fee</p>
                  <p className="font-display text-3xl font-bold">$499</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-background p-5">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">8 Weeks</p>
                </div>
                <div className="rounded-2xl bg-background p-5">
                  <p className="text-sm text-muted-foreground">Format</p>
                  <p className="font-semibold text-foreground">Live sessions + self-paced labs</p>
                </div>
                <div className="rounded-2xl bg-background p-5">
                  <p className="text-sm text-muted-foreground">Outcome</p>
                  <p className="font-semibold text-foreground">Job-ready marketing skillset</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeading
            label="What You Get"
            title="A Digital Marketing Course Built for Opportunity"
            description="Everything you need to start winning clients, optimizing campaigns, and scaling your business online."
          />
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-background p-8"
              >
                <div className="flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary mb-5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Ready to secure your spot?"
                description="Reserve your spot in the next digital marketing cohort and start learning the skills that drive modern growth."
                align="left"
              />
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Our course is crafted to deliver immediate value with real marketing systems, campaign blueprints, and mentor-led reviews. A single payment unlocks the full program and lifetime access to course resources.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8">
              <div className="rounded-3xl bg-card p-8">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Pay securely</p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">Fast checkout and support</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  We partner with trusted payment providers to keep your details safe. After payment, our admissions team will contact you immediately.
                </p>
                <Button variant="hero" size="lg" className="mt-8 w-full" asChild>
                  <Link to="https://pages.razorpay.com/pl_Skqr0VCdUFygJ3/view">Proceed to Payment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opportunity;
