import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <h5 className="text-white font-semibold mb-4">Categories</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Men's Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Women's Clothing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nishant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
