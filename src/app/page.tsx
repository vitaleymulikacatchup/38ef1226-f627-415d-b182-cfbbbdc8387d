"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Calculator, Car, CheckCircle, CreditCard, DollarSign, Handshake, HelpCircle, Mail, MessageSquare, RefreshCw, Shield, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Inventory", id: "products" },
            { name: "Services", id: "feature" },
            { name: "About Us", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoMax"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="YO YO"
          description="Discover premium vehicles with guaranteed quality, competitive pricing, and exceptional service. Your dream car awaits at AutoMax."
          tag="Premium Dealership"
          tagIcon={Car}
          buttons={[
            { text: "View Inventory", href: "products" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car dealership showroom"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are dedicated to providing exceptional automotive experiences with transparent pricing, expert service, and a commitment to helping you find the perfect vehicle for your needs and budget."
          buttons={[
            { text: "Learn More", href: "feature" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose AutoMax"
          description="Experience the difference with our comprehensive automotive services designed to make your car buying journey smooth and stress-free."
          tag="Our Services"
          tagIcon={Shield}
          features={[
            {
              title: "Expert Financing",
              description: "Get pre-approved with competitive rates and flexible terms tailored to your budget and credit situation.",
              icon: CreditCard
            },
            {
              title: "Quality Guarantee",
              description: "Every vehicle undergoes rigorous inspection and comes with our comprehensive quality assurance program.",
              icon: CheckCircle
            },
            {
              title: "Extended Warranty",
              description: "Protect your investment with our extended warranty options covering major components and systems.",
              icon: Shield
            },
            {
              title: "Trade-In Service",
              description: "Get fair market value for your current vehicle with our hassle-free trade-in evaluation process.",
              icon: RefreshCw
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Browse our carefully selected inventory of premium vehicles, each inspected and priced competitively for exceptional value."
          tag="Available Now"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Honda",
              name: "Accord EX-L Sedan",
              price: "$28,500",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Honda Accord sedan"
            },
            {
              id: "2",
              brand: "Toyota",
              name: "RAV4 Limited SUV",
              price: "$32,900",
              rating: 5,
              reviewCount: "3.4k",
              imageSrc: "https://images.pexels.com/photos/13128031/pexels-photo-13128031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Toyota RAV4 SUV"
            },
            {
              id: "3",
              brand: "Ford",
              name: "F-150 XLT Pickup",
              price: "$38,750",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/16033911/pexels-photo-16033911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ford F-150 pickup truck"
            },
            {
              id: "4",
              brand: "Mazda",
              name: "MX-5 Miata Sport",
              price: "$27,650",
              rating: 5,
              reviewCount: "945",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mazda MX-5 sports car"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Financing Options"
          description="Choose the financing plan that works best for your budget and lifestyle with competitive rates and flexible terms."
          tag="Financing"
          tagIcon={Calculator}
          plans={[
            {
              id: "basic",
              badge: "Value Choice",
              badgeIcon: DollarSign,
              price: "$299/mo",
              subtitle: "Perfect for first-time buyers",
              features: [
                "36-month term available",
                "Low down payment options",
                "Basic warranty included",
                "Online payment portal"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$449/mo",
              subtitle: "Best value for families",
              features: [
                "48-month flexible terms",
                "Extended warranty coverage",
                "Gap insurance included",
                "Priority service scheduling",
                "Roadside assistance"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Track Record"
          description="Numbers that showcase our commitment to customer satisfaction and automotive excellence."
          tag="Achievements"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "5,000+",
              description: "Vehicles Sold"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "15+",
              description: "Years in Business"
            },
            {
              id: "4",
              value: "24/7",
              description: "Customer Support"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with AutoMax."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Small Business Owner",
              company: "Chen Construction",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7562140/pexels-photo-7562140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Nurse",
              company: "City General Hospital",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Project Manager",
              company: "BuildRight Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="We work with leading automotive brands and financial institutions to provide you with the best service and options."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp",
            "placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles, financing, and services."
          tag="Support"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Customer consultation"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What financing options do you offer?",
              content: "We offer various financing options including traditional loans, lease agreements, and special financing for qualified buyers. Our finance team works with multiple lenders to find competitive rates."
            },
            {
              id: "2",
              title: "Do you accept trade-ins?",
              content: "Yes! We accept trade-ins and provide fair market value assessments. Our team will evaluate your vehicle and provide a competitive trade-in offer that can be applied toward your new purchase."
            },
            {
              id: "3",
              title: "What warranty coverage is included?",
              content: "All our vehicles come with manufacturer warranty coverage. We also offer extended warranty options for additional peace of mind, covering major components and systems."
            },
            {
              id: "4",
              title: "Can I schedule a test drive online?",
              content: "Absolutely! You can schedule test drives through our website or by calling our showroom. We recommend scheduling in advance to ensure your preferred vehicle is available."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Find Your Perfect Car?"
          description="Contact us today to schedule a test drive, get financing information, or speak with our automotive experts about finding your ideal vehicle."
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting your information, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AutoMax"
          columns={[
            {
              items: [
                { label: "Inventory", href: "products" },
                { label: "Financing", href: "pricing" },
                { label: "Services", href: "feature" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}