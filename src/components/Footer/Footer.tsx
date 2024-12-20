import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { Newsletter } from './Newsletter';
import { ShoppingBag } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">ShopHub</span>
            </div>
            <p className="text-gray-300">
              Your one-stop shop for premium products and exceptional shopping experience.
            </p>
            <SocialLinks />
          </div>

          <FooterSection title="Shop">
            <div className="space-y-4">
              <FooterLink href="#electronics">Electronics</FooterLink>
              <FooterLink href="#accessories">Accessories</FooterLink>
              <FooterLink href="#home">Home & Living</FooterLink>
              <FooterLink href="#appliances">Appliances</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="Support">
            <div className="space-y-4">
              <FooterLink href="#contact">Contact Us</FooterLink>
              <FooterLink href="#faq">FAQs</FooterLink>
              <FooterLink href="#shipping">Shipping Information</FooterLink>
              <FooterLink href="#returns">Returns & Exchanges</FooterLink>
            </div>
          </FooterSection>

          <div className="lg:col-span-1">
            <Newsletter />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};