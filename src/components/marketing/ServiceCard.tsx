import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  modalContent?: {
    title: string;
    description: string;
    features: string[];
  };
}

const ServiceCard = ({
  title = "Digital Marketing Service",
  description = "Comprehensive digital marketing solutions to grow your business online.",
  icon = <ArrowRight className="h-6 w-6" />,
  modalContent = {
    title: "Digital Marketing Service",
    description:
      "Our comprehensive digital marketing solutions help businesses thrive in the online space.",
    features: [
      "Strategic campaign planning",
      "Data-driven optimization",
      "Cross-platform integration",
      "Performance tracking",
    ],
  },
}: ServiceCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Card className="w-[350px] h-[300px] bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                {icon}
              </div>
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-primary hover:text-primary/80">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{modalContent.title}</DialogTitle>
          <DialogDescription>{modalContent.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {modalContent.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceCard;
