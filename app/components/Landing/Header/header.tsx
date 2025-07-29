"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className='absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/images/nestlogo.png'
              alt='Nest Workspaces'
              width={160}
              height={50}
              className='h-14 md:h-20 w-auto'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-white hover:text-yellow-300 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/#features'
              className='text-white hover:text-yellow-300 transition-colors'
            >
              Features
            </Link>
            <Link
              href='/#pricing'
              className='text-white hover:text-yellow-300 transition-colors'
            >
              Pricing
            </Link>
            <Link
              href='/#about'
              className='text-white hover:text-yellow-300 transition-colors'
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-white hover:bg-white/20'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-white/30 bg-black/70 backdrop-blur-md'>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/'
                className='text-white hover:text-yellow-300 transition-colors px-4 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/#features'
                className='text-white hover:text-yellow-300 transition-colors px-4 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href='/#pricing'
                className='text-white hover:text-yellow-300 transition-colors px-4 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href='/#about'
                className='text-white hover:text-yellow-300 transition-colors px-4 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className='flex flex-col space-y-2 px-4 pt-4 border-t border-white/30'>
                <Link href='/login' onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant='ghost'
                    className='w-full justify-start text-white hover:bg-white/20'
                  >
                    Sign In
                  </Button>
                </Link>

                <Link href='/register' onClick={() => setIsMenuOpen(false)}>
                  <Button className='w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300'>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
