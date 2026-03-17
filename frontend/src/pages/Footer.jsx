import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">

        {/* Logo + Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">KART</h2>
          <p className="text-sm mb-3">
            Powering Your World with the Best in Electronics.
          </p>

          <p className="text-sm">
            123 Electronics St, Style City, NY 10001
          </p>

          <p className="text-sm mt-2">Email: support@zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-green-500 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-green-500 cursor-pointer">FAQs</li>
            <li className="hover:text-green-500 cursor-pointer">Order Tracking</li>
            <li className="hover:text-green-500 cursor-pointer">Size Guide</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Facebook className="cursor-pointer hover:text-green-500" />
            <Instagram className="cursor-pointer hover:text-green-500" />
            <Twitter className="cursor-pointer hover:text-green-500" />
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay in the Loop</h3>

          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and more
          </p>

          <div className="flex gap-2">
            <Input placeholder="Your email address" />
            <Button className="bg-green-500 hover:bg-green-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © 2025 KART. All rights reserved
      </div>
    </footer>
  );
}