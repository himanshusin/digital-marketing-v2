import React from "react";
import HeroSection from "./marketing/HeroSection";
import ServiceGrid from "./marketing/ServiceGrid";
import CaseStudyCarousel from "./marketing/CaseStudyCarousel";
import ContactButton from "./marketing/ContactButton";
import { motion } from "framer-motion";

interface HomeProps {
  showContactForm?: boolean;
}

const Home = ({ showContactForm = false }: HomeProps) => {
  const [isContactFormOpen, setIsContactFormOpen] =
    React.useState(showContactForm);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Services Section */}
      <section className="py-20">
        <ServiceGrid />
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              See how we've helped businesses achieve their goals
            </p>
          </div>
          <CaseStudyCarousel />
        </div>
      </section>

      {/* Contact Button */}
      <ContactButton
        isOpen={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
    </motion.div>
  );
};

export default Home;
