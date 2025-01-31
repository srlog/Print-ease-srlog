import { motion } from 'framer-motion';
import { Printer, Sparkles, Download, Award, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Landing() {
  const features = [
    {
      icon: Award,
      title: "Professional Templates",
      description: "Choose from our collection of beautifully designed certificate templates"
    },
    {
      icon: Sparkles,
      title: "Easy Customization",
      description: "Personalize your certificates with just a few clicks"
    },
    {
      icon: Download,
      title: "Instant Download",
      description: "Download your certificates instantly in PNG or PDF format"
    }
  ];

  const stats = [
    { value: "10K+", label: "Certificates Created" },
    { value: "50+", label: "Templates" },
    { value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/50 via-background/30 to-background/50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/80 via-blue-500/50 to-purple-500/50 rounded-lg blur-xl opacity-70"></div>
              <div className="relative flex items-center justify-center gap-2 bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <Printer className="w-16 h-16 text-primary animate-pulse" />
                <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                  PrintEase
                </h1>
              </div>
            </div>
            
            <p className="text-2xl text-muted-foreground mt-6 mb-10">
              Create stunning certificates in minutes with our professional platform
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Templates
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-[15%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-[15%] w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm border-y border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-background/50 backdrop-blur-sm border border-primary/20">
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose PrintEase?</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create professional certificates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full p-6 bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="relative h-12 w-12 mb-6 mx-auto">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg transform group-hover:scale-110 transition-transform" />
                    <feature.icon className="relative w-12 h-12 text-primary p-2.5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm border-t border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who trust PrintEase for their certificate needs
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Create Your First Certificate <Zap className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}