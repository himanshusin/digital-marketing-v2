import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface ServiceModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  service?: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    price: string;
  };
}

const ServiceModal = ({
  isOpen = true,
  onClose = () => {},
  service = {
    title: "Digital Marketing Strategy",
    description:
      "Comprehensive digital marketing solutions tailored to your business needs. We help you reach your target audience and achieve your marketing goals.",
    features: [
      "Custom Strategy Development",
      "Market Research & Analysis",
      "Competitor Analysis",
      "KPI Setting & Tracking",
    ],
    benefits: [
      "Increased Online Visibility",
      "Higher Conversion Rates",
      "Better ROI",
      "Data-Driven Decisions",
    ],
    price: "Starting from $2,000/month",
  },
}: ServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-900 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300 mt-2">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                >
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Benefits
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {service.price}
            </div>
            <Button className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
