import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award } from "lucide-react";

interface CaseStudy {
  client: string;
  industry: string;
  metrics: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
  testimonial: string;
  author: string;
  position: string;
}

interface CaseStudyCarouselProps {
  cases?: CaseStudy[];
}

const CaseStudyCarousel = ({
  cases = [
    {
      client: "TechCorp Solutions",
      industry: "SaaS",
      metrics: [
        {
          icon: <TrendingUp className="h-5 w-5 text-green-500" />,
          label: "Revenue Growth",
          value: "+150%",
        },
        {
          icon: <Users className="h-5 w-5 text-blue-500" />,
          label: "New Users",
          value: "10,000+",
        },
        {
          icon: <Award className="h-5 w-5 text-purple-500" />,
          label: "ROI",
          value: "3.5x",
        },
      ],
      testimonial:
        "The digital marketing strategy completely transformed our online presence and lead generation capabilities.",
      author: "Sarah Johnson",
      position: "Marketing Director",
    },
    {
      client: "Global Retail Inc",
      industry: "E-commerce",
      metrics: [
        {
          icon: <TrendingUp className="h-5 w-5 text-green-500" />,
          label: "Sales Increase",
          value: "+200%",
        },
        {
          icon: <Users className="h-5 w-5 text-blue-500" />,
          label: "Customer Base",
          value: "25,000+",
        },
        {
          icon: <Award className="h-5 w-5 text-purple-500" />,
          label: "ROI",
          value: "4.2x",
        },
      ],
      testimonial:
        "Our e-commerce performance skyrocketed after implementing their strategic recommendations.",
      author: "Michael Chen",
      position: "CEO",
    },
    {
      client: "HealthTech Solutions",
      industry: "Healthcare",
      metrics: [
        {
          icon: <TrendingUp className="h-5 w-5 text-green-500" />,
          label: "Patient Reach",
          value: "+180%",
        },
        {
          icon: <Users className="h-5 w-5 text-blue-500" />,
          label: "Appointments",
          value: "15,000+",
        },
        {
          icon: <Award className="h-5 w-5 text-purple-500" />,
          label: "ROI",
          value: "3.8x",
        },
      ],
      testimonial:
        "Their marketing expertise helped us connect with more patients and expand our digital footprint.",
      author: "Dr. Emily Roberts",
      position: "Medical Director",
    },
  ],
}: CaseStudyCarouselProps) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-12 px-4">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {cases.map((caseStudy, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {caseStudy.client}
                          </h3>
                          <Badge variant="secondary" className="mt-2">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="flex justify-center mb-2">
                              {metric.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <blockquote className="text-lg italic text-gray-600 dark:text-gray-300">
                          "{caseStudy.testimonial}"
                        </blockquote>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {caseStudy.author}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {caseStudy.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CaseStudyCarousel;
