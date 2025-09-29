"use client";

import { Link } from "react-router-dom";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Stories", href: "/stories" },
      { label: "Authors", href: "/authors" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Guidelines", href: "/guidelines" },
    ],
    social: [
      { label: "Twitter", href: "https://twitter.com", icon: Twitter },
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Email", href: "mailto:support@storivault.com", icon: Mail },
    ],
  };

  return (
    <footer className="bg-background border-t mt-auto">
      {/* Main Footer Content - Dark Background */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section with New Logo */}
            <div className="lg:col-span-2">
              <Logo size="md" className="mb-4" />
              <p className="text-gray-300 mb-4 max-w-sm">
                Your gateway to infinite stories. Discover captivating tales,
                connect with passionate writers, and immerse yourself in worlds
                beyond imagination.
              </p>
              <div className="flex gap-2">
                {footerLinks.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-gray-700 text-gray-300 hover:text-white"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Product
              </h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Light Background */}
      <div className="bg-background border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <span>© {currentYear} StoriVault. All rights reserved.</span>
            </div>

            {/* Powered by NexusNao - Right Side */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Powered by</span>
              <a
                href="https://nexusnao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors"
              >
                NexusNao
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
