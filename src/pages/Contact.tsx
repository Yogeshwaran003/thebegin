import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const scriptURL = "https://script.google.com/macros/s/AKfycbyK5j3_3yaLuadcTwi-wS5yPhRcznRtCIg6z4HK9LjMOoSBNt2z5k_-PxJwPZ99_uqp3A/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (result.status !== "success") {
      throw new Error(result.message);
    }

    toast.success("Thank you! We'll get back to you within 24 hours.");

    setForm({ name: "", email: "", phone: "", company: "", message: "" });

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <SectionHeading label="Contact Us" title="Let's Start a Conversation" description="Ready to grow your business? Get in touch and we'll respond within 24 hours." />
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3"><Mail size={16} className="text-primary" /> hello@clearcraft.com</li>
                  <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +1 (555) 123-4567</li>
                  <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> 123 Marketing Ave, New York, NY 10001</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Monday–Friday: 9am–6pm EST</p>
                <p className="text-sm text-muted-foreground">Saturday–Sunday: Closed</p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="md:col-span-3 rounded-xl border border-border bg-card p-8 shadow-card space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <input type="number" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                <input type="text" placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
              </div>
              <textarea placeholder="Tell us about your project *" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} />
              <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-1" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
