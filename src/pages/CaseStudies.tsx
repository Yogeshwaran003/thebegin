import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp } from "lucide-react";

const studies = [
  { title: "E-commerce Revenue Explosion", category: "SEO + PPC", metric: "+340%", metricLabel: "Revenue Growth", desc: "Helped an online retailer grow from $50K to $220K in monthly revenue through a combined SEO and Google Ads strategy.", results: ["340% revenue increase", "5.2x ROAS on Google Ads", "180% organic traffic growth", "42% conversion rate improvement"] },
  { title: "SaaS Lead Generation Machine", category: "Content + SEO", metric: "+312%", metricLabel: "Qualified Leads", desc: "Built a content-driven lead generation engine for a B2B SaaS company that tripled their sales pipeline.", results: ["312% more qualified leads", "#1 ranking for 45 target keywords", "67% lower cost per acquisition", "2.8x increase in demo bookings"] },
  { title: "Local Business Market Dominance", category: "Local SEO", metric: "#1", metricLabel: "Google Maps Ranking", desc: "Took a local restaurant chain from invisible to the #1 position on Google Maps in just 60 days.", results: ["#1 Google Maps ranking", "480% increase in phone calls", "3x more walk-in customers", "250% growth in online orders"] },
  { title: "Startup Brand Awareness Surge", category: "Social Media", metric: "50K", metricLabel: "Monthly Followers", desc: "Built a social media presence from scratch for a fashion startup, reaching 50K engaged followers.", results: ["50K followers in 6 months", "8.2% engagement rate", "$120K in attributed revenue", "15 influencer partnerships"] },
  { title: "B2B LinkedIn Authority", category: "Content + LinkedIn", metric: "+520%", metricLabel: "Inbound Inquiries", desc: "Established thought leadership on LinkedIn for a consulting firm, driving a 520% increase in inbound leads.", results: ["520% more inbound leads", "3M+ content impressions", "42% connection acceptance rate", "12x ROI on content investment"] },
  { title: "E-commerce PPC Turnaround", category: "Google Ads", metric: "4.8x", metricLabel: "Return on Ad Spend", desc: "Transformed an underperforming Google Ads account into a profit machine with 4.8x ROAS.", results: ["4.8x ROAS achieved", "62% lower CPC", "3x conversion volume", "Scaled from $5K to $50K monthly spend"] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <SectionHeading label="Case Studies" title="Real Results for Real Businesses" description="See how we've helped companies like yours achieve extraordinary growth with data-driven marketing." />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-8 md:grid-cols-2">
            {studies.map((cs) => (
              <motion.div key={cs.title} variants={item} className="rounded-xl border border-border bg-card p-8 shadow-card hover:border-primary/30 transition-all">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{cs.category}</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{cs.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-gradient-primary">{cs.metric}</span>
                  <span className="text-sm text-muted-foreground">{cs.metricLabel}</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{cs.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-foreground">
                      <TrendingUp size={12} className="text-primary shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Want Results Like These?</h2>
          <p className="mt-4 text-muted-foreground">Let's discuss how we can grow your business.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/free-audit">Start with a Free Audit <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
