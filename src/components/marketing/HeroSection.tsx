import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart, Users, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon: React.ReactNode;
  }>;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Transform Your Digital Presence",
  subtitle = "Innovative marketing solutions that drive real business growth",
  stats = [
    {
      value: "250+",
      label: "Satisfied Clients",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "180%",
      label: "Average ROI",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <BarChart className="h-6 w-6" />,
    },
  ],
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
}: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gray-900 pt-20">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-lg w-64"
              >
                <div className="text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
