import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "10 SEO Strategies That Actually Work in 2026", category: "SEO", excerpt: "Discover the latest techniques to improve your search rankings and drive organic traffic to your website.", date: "Mar 5, 2026" },
  { title: "How to 3x Your Google Ads ROI This Quarter", category: "PPC", excerpt: "Learn the proven optimization tactics that top advertisers use to maximize their return on ad spend.", date: "Mar 1, 2026" },
  { title: "The Complete Social Media Playbook for Small Businesses", category: "Social Media", excerpt: "A step-by-step guide to building a strong social media presence without a massive budget.", date: "Feb 25, 2026" },
  { title: "Why Your Website Isn't Converting (And How to Fix It)", category: "CRO", excerpt: "Common conversion killers and the simple fixes that can dramatically improve your website's performance.", date: "Feb 20, 2026" },
  { title: "Local SEO: How to Dominate Google Maps", category: "Local SEO", excerpt: "Everything you need to know about ranking #1 on Google Maps for your local business.", date: "Feb 15, 2026" },
  { title: "Email Marketing Automation: A Beginner's Guide", category: "Email", excerpt: "Set up automated email sequences that nurture leads and drive sales on autopilot.", date: "Feb 10, 2026" },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative">
          <SectionHeading label="Blog" title="Marketing Insights & Strategies" description="Actionable tips and strategies to help you grow your business online." />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30"
              >
                <div className="h-48 bg-muted grid-pattern" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all cursor-pointer">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
