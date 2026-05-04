import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  CreditCard,
  ArrowRight,
  Globe,
  ShieldCheck,
  Clock,
} from "lucide-react";

const Opportunity = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-24 pb-20 bg-slate-950 text-slate-100 overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Job-ready Training Programs
              </div>
              <div className="space-y-6 max-w-2xl">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Learn. Build. Get
                  <span className="ml-2 text-gradient-primary">Certified.</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-8">
                  Training & internship, hands-on projects, mentor reviews, and QR-verifiable certificates on Molecule, a modern LMS built for ambitious learners.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <Link to="https://pages.razorpay.com/pl_Skqr0VCdUFygJ3/view">Register Now</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { value: "10,000+", label: "Certified Learners" },
                  { value: "400+", label: "Lessons" },
                  { value: "15+", label: "Tracks" },
                  { value: "100%", label: "Online" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-emerald-500/20 bg-slate-900/90 p-5 text-left">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] border border-emerald-500/20 bg-slate-900/95 p-8 shadow-glow shadow-emerald-500/20"
            >
              <div className="space-y-6">
                {/* <div className="rounded-3xl border border-emerald-500/15 bg-emerald-500/10 p-5 text-slate-100">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-emerald-200/80">Offer ends soon</p>
                      <p className="mt-2 text-sm text-slate-300">Instant access with UPI | Cards | Net Banking | Wallets. No hidden fees.</p>
                    </div>
                    <div className="rounded-3xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
                      5:00
                    </div>
                  </div>
                </div> */}

                    {/* <div className="rounded-[1.75rem] border border-emerald-500/20 bg-slate-950/95 p-6">
                      <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">Choose your plan</p>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-3xl border border-emerald-500/15 bg-slate-900 p-5 text-slate-100 shadow-sm shadow-emerald-500/10">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-base font-semibold">Intermediate</p>
                            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase text-emerald-200">Best value</span>
                          </div>
                          <p className="mt-5 text-3xl font-bold text-white">₹4,500</p>
                          <ul className="mt-5 space-y-3 text-sm text-slate-400">
                            <li>Performance-based stipend</li>
                            <li>Live interview preparation</li>
                            <li>Includes everything in Self Paced</li>
                          </ul>
                        </div>
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-slate-100">
                          <p className="text-base font-semibold">Self Paced</p>
                          <p className="mt-5 text-3xl font-bold text-white">₹3,500</p>
                          <ul className="mt-5 space-y-3 text-sm text-slate-400">
                            <li>Complete curriculum</li>
                            <li>Projects & checkpoints</li>
                            <li>QR certificate</li>
                          </ul>
                        </div>
                      </div>
                    </div> */}

                {/* <div className="rounded-[1.75rem] border border-emerald-500/15 bg-slate-950/95 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">Choose how to pay</p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <button className="rounded-3xl border border-emerald-500/20 bg-slate-900 p-5 text-left text-slate-100 transition hover:border-emerald-400/40">
                      <p className="text-sm font-semibold text-white">Reserve with ₹999</p>
                      <p className="mt-3 text-sm text-slate-400">Pay ₹999 now + remaining later</p>
                    </button>
                    <button className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-left text-slate-100 transition hover:border-emerald-400/30">
                      <p className="text-sm font-semibold text-white">Pay in full</p>
                      <p className="mt-3 text-sm text-slate-400">One-time payment. Instant access.</p>
                    </button>
                  </div>
                  <div className="mt-6 rounded-3xl bg-slate-900/80 p-5 text-slate-200">
                    <p className="text-sm text-slate-400">You pay now:</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">₹999</span>
                      <span className="text-sm text-slate-400">Before Training: ₹3,501</span>
                    </div>
                  </div>
                </div> */}

                <div className="rounded-[1.75rem] border border-emerald-500/15 bg-slate-950/95 p-6">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm text-slate-300">Full name</Label>
                      <Input id="fullName" placeholder="Your full name" className="mt-3 bg-slate-900/90 text-slate-100 border-slate-800" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-[0.4fr_1fr]">
                      <div>
                        <Label htmlFor="country" className="text-sm text-slate-300">Phone</Label>
                        <Input id="country" value="IN +91" readOnly className="mt-3 bg-slate-900/90 text-slate-100 border-slate-800" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm text-slate-300">Mobile</Label>
                        <Input id="phone" placeholder="10-digit number" className="mt-3 bg-slate-900/90 text-slate-100 border-slate-800" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm text-slate-300">Email</Label>
                      <Input id="email" type="email" placeholder="Your email address" className="mt-3 bg-slate-900/90 text-slate-100 border-slate-800" />
                    </div>
                    <div>
                      <Label htmlFor="college" className="text-sm text-slate-300">College</Label>
                      <Input id="college" placeholder="Your college name" className="mt-3 bg-slate-900/90 text-slate-100 border-slate-800" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm text-slate-300">
                        I agree to the <Link to="/terms" className="text-emerald-300 underline">Terms & Conditions</Link>
                      </label>
                    </div>
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="https://pages.razorpay.com/pl_Skqr0VCdUFygJ3/view">Pay ₹999 & Reserve seat</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3 rounded-[1.75rem] border border-emerald-500/15 bg-slate-950/95 p-5 text-slate-300">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                    <p className="text-sm">Mentor Led & QR-verified certificates</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-emerald-300" />
                    <p className="text-sm">Secure Checkout</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-emerald-300" />
                    <p className="text-sm">Instant Access</p>
                  </div>
                  <div className="text-sm text-slate-400">Need Help? Contact: +91 63605 84544</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opportunity;
