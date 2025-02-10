import React from "react";
import HeroSection from "./marketing/HeroSection";
import Navbar from "./marketing/Navbar";
import ServiceGrid from "./marketing/ServiceGrid";
import CaseStudyCarousel from "./marketing/CaseStudyCarousel";
import ContactButton from "./marketing/ContactButton";
import { motion } from "framer-motion";
import Footer from "./marketing/Footer";

interface HomeProps {
  showContactForm?: boolean;
}

const Home = ({ showContactForm = false }: HomeProps) => {
  const [isContactFormOpen, setIsContactFormOpen] =
    React.useState(showContactForm);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar logoSrc="https://raw.githubusercontent.com/yourusername/yourrepo/main/public/slingshot-logo.png" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 overflow-hidden"
      >
        <ServiceGrid />
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                Client Success Stories
              </h2>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover how we've helped innovative businesses transform their
                digital presence and achieve exceptional results.
              </p>
            </motion.div>
          </div>
          <CaseStudyCarousel />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-primary/5 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard number="250+" label="Happy Clients" />
            <StatCard number="95%" label="Client Retention" />
            <StatCard number="180%" label="Average ROI" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </motion.section>

      {/* Contact Button */}
      <ContactButton
        isOpen={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
      <Footer />
    </div>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center"
  >
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
      {number}
    </div>
    <div className="text-gray-600 dark:text-gray-300 font-medium">{label}</div>
  </motion.div>
);

export default Home;
