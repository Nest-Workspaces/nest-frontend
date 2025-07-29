import React from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div className='col-span-1 md:col-span-2'>
            <Link href='/' className='flex items-center space-x-2 mb-4'>
              <Building2 className='h-8 w-8 text-blue-400' />
              <span className='text-xl font-bold'>Nest Workspaces</span>
            </Link>
            <p className='text-gray-400 mb-6 max-w-md'>
              Empowering professionals and businesses with premium workspace
              solutions in prime locations across the globe.
            </p>
            <div className='space-y-2'>
              <div className='flex items-center text-gray-400'>
                <Mail className='w-4 h-4 mr-2' />
                <span>hello@nestworkspaces.com</span>
              </div>
              <div className='flex items-center text-gray-400'>
                <Phone className='w-4 h-4 mr-2' />
                <span>+63 945 451 07897</span>
              </div>
              <div className='flex items-center text-gray-400'>
                <MapPin className='w-4 h-4 mr-2' />
                <span>
                  Basement 1, Horizons 101, General Maxilom Avenue, Cebu City.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/#features'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='/#pricing'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/#about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/cookies'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 Nest Workspaces. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
