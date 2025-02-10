import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import {
  BarChart2,
  Globe2,
  MessageCircle,
  Search,
  Share2,
  Zap,
} from "lucide-react";

interface ServiceGridProps {
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    modalContent: {
      title: string;
      description: string;
      features: string[];
    };
  }>;
}

const ServiceGrid = ({
  services = [
    {
      title: "Micro Branding",
      description:
        "Build a distinctive brand identity that resonates with your target audience.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "Micro Branding Solutions",
        description:
          "Create a powerful brand presence with our micro branding strategies.",
        features: [
          "Brand Identity Design",
          "Voice & Tone Development",
          "Visual Guidelines",
          "Brand Strategy",
        ],
      },
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage your audience across all major social media platforms.",
      icon: <Share2 className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "Social Media Marketing",
        description:
          "Comprehensive social media management and growth strategies.",
        features: [
          "Content Creation",
          "Community Management",
          "Paid Advertising",
          "Analytics Reporting",
        ],
      },
    },
    {
      title: "Online Feedback Management",
      description: "Monitor and manage your online reputation effectively.",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "Reputation Management",
        description: "Protect and enhance your brand's online reputation.",
        features: [
          "Review Monitoring",
          "Response Management",
          "Sentiment Analysis",
          "Crisis Management",
        ],
      },
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility.",
      icon: <Search className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "SEO Services",
        description:
          "Boost your website's search engine performance and visibility.",
        features: [
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
          "Link Building",
        ],
      },
    },
    {
      title: "Content Marketing",
      description: "Create engaging content that drives conversions.",
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "Content Marketing",
        description: "Strategic content creation and distribution services.",
        features: [
          "Content Strategy",
          "Blog Writing",
          "Email Marketing",
          "Content Analytics",
        ],
      },
    },
    {
      title: "PPC Management",
      description: "Maximize ROI with targeted paid advertising campaigns.",
      icon: <Globe2 className="h-6 w-6 text-primary" />,
      modalContent: {
        title: "PPC Campaign Management",
        description: "Results-driven paid advertising campaign management.",
        features: [
          "Campaign Setup",
          "Ad Creation",
          "Budget Management",
          "Performance Tracking",
        ],
      },
    },
  ],
}: ServiceGridProps) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Comprehensive digital marketing solutions for your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                modalContent={service.modalContent}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceGrid;
