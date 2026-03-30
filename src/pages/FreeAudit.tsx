import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Search, BarChart3, Globe, Zap } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  "Complete website SEO analysis",
  "Competitor benchmarking report",
  "Keyword opportunity analysis",
  "Technical SEO audit",
  "Actionable recommendations",
  "No obligation, 100% free",
];

const FreeAudit = () => {
  const [form, setForm] = useState({ name: "", email: "", website: "", phone: "" });

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. PASTE YOUR GOOGLE APPS SCRIPT URL HERE
    const scriptURL = "https://script.google.com/macros/s/AKfycbyRp3jQSa5dvEWzgIo3vxzgcC8FoNxRvQnPQvpL0bOidD0fM4WFA4i5ywmsBBe79Q94FQ/exec";

    try {
      // 2. Send the captured form state securely to Google Sheets
      await fetch(scriptURL, {
        method: "POST",
        // Using 'text/plain' safely bypasses restrictive browser CORS errors for Apps Script
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form)
      });

      // 3. Show your existing toast notification
      toast.success("Your free SEO audit request has been received! We'll send your report within 48 hours.");
      
      // 4. Clear the frontend form
      setForm({ name: "", email: "", website: "", phone: "" });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };


  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                100% Free · No Obligation
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl text-foreground leading-tight">
                Get Your Free <span className="text-gradient-primary">SEO Audit</span> Report
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Discover exactly what's holding your website back and get a custom roadmap to improve your search rankings.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8 shadow-card shadow-glow space-y-5"
            >
              <h3 className="font-display text-xl font-bold text-foreground text-center">Claim Your Free Audit</h3>
              <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
              <input type="url" placeholder="Website URL(Optional)"  value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClass} />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Get My Free Audit <ArrowRight size={16} />
              </Button>
              <p className="text-xs text-muted-foreground text-center">We'll send your report within 48 hours. No spam, ever.</p>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container text-center">
          <SectionHeading label="What You'll Get" title="A Complete SEO Roadmap" description="Our free audit covers everything you need to start ranking higher." />
          <div className="grid gap-6 md:grid-cols-4 max-w-4xl mx-auto">
            {[
              { icon: Search, title: "SEO Score", desc: "Overall health score of your website's SEO." },
              { icon: BarChart3, title: "Competitor Analysis", desc: "See how you stack up against competitors." },
              { icon: Globe, title: "Technical Issues", desc: "Find and fix critical technical problems." },
              { icon: Zap, title: "Quick Wins", desc: "Immediate actions to improve rankings." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary/10 p-3"><item.icon className="h-5 w-5 text-primary" /></div>
                <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FreeAudit;
