import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/slingshot-logo.png"
                alt="SlingShot Technology"
                className="h-8"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/branding">Micro Branding</FooterLink>
              <FooterLink href="/services/social-media">
                Social Media Marketing
              </FooterLink>
              <FooterLink href="/services/seo">SEO Optimization</FooterLink>
              <FooterLink href="/services/content">
                Content Marketing
              </FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>1234 Digital Avenue</p>
              <p>Tech City, TC 12345</p>
              <a
                href="mailto:hello@slingshot.tech"
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@slingshot.tech</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} SlingShot Technology. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={href}
      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
