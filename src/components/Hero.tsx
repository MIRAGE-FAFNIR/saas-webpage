import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30">
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] opacity-20">
        <div className="absolute inset-0 bg-accent/30 blur-[100px] rounded-full" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Introducing Nexus 2.0 — Now with AI-powered analytics
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Build products that{" "}
            <span className="text-gradient">scale with you</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            The all-in-one platform for modern teams. Streamline your workflow, 
            collaborate seamlessly, and ship faster than ever before.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="xl" className="group">
              Start for free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border"
          >
            {[
              { value: "10K+", label: "Active users" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "150+", label: "Integrations" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden glass p-2">
            <div className="rounded-xl overflow-hidden bg-card border border-border">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-md bg-background/80 border border-border text-sm text-foreground font-medium">
                    app.nexus.dev
                  </div>
                </div>
              </div>
              
              {/* Dashboard Preview */}
              <div className="p-6 min-h-[300px] md:min-h-[400px] bg-background">
                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Total Revenue", value: "$48,352", change: "+12.5%", color: "text-green-400" },
                    { label: "Active Users", value: "2,847", change: "+8.2%", color: "text-green-400" },
                    { label: "Conversion", value: "3.24%", change: "+2.1%", color: "text-green-400" },
                  ].map((metric, i) => (
                    <div key={i} className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-xl font-bold text-foreground">{metric.value}</p>
                      <p className={`text-xs ${metric.color}`}>{metric.change}</p>
                    </div>
                  ))}
                </div>
                
                {/* Chart Area */}
                <div className="rounded-lg bg-secondary/20 border border-border p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-foreground">Analytics Overview</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">Weekly</span>
                      <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">Monthly</span>
                    </div>
                  </div>
                  {/* Simulated Chart */}
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Activity List */}
                <div className="space-y-2">
                  {[
                    { user: "Sarah K.", action: "Completed onboarding", time: "2m ago" },
                    { user: "Mike R.", action: "Upgraded to Pro", time: "5m ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                          {item.user.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.user}</p>
                          <p className="text-xs text-muted-foreground">{item.action}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/20 blur-[80px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
