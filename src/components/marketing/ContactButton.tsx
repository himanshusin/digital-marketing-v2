import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ContactButtonProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ContactButton = ({
  isOpen = true,
  onOpenChange = () => {},
}: ContactButtonProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="lg"
            className="w-[60px] h-[60px] rounded-full bg-primary/80 backdrop-blur-sm shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-800">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          {/* Placeholder for where ContactForm would be */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Your message"
                className="w-full p-2 border rounded-md h-24"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
