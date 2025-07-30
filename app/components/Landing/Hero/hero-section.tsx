"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, MapPin, Users, Wifi } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const images = [
    "/images/landing.jpg",
    "/images/landing2.jpg",
    "/images/landing3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='relative overflow-hidden'>
      {/* Background carousel */}
      <div className='absolute inset-0'>
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
            style={{
              backgroundImage: `url(${src})`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-42 pb-32'>
        <div className='text-center space-y-8'>
          {/* Main heading */}
          <div className='space-y-6'>
            <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
              Designed for Focus. <br />
              <span className='block text-[#ffc622]'>Built for Growth.</span>
            </h1>

            {/* Badge */}
            <div
              className='inline-flex items-center gap-2 px-5 py-2.5 
                bg-white/15 backdrop-blur-md rounded-full 
                text-white text-sm font-medium 
                border border-white/20 
                shadow-md'
            >
              <MapPin className='w-4 h-4 text-white' />
              <span>Premium Workspaces Available</span>
            </div>

            <p className='text-xl text-white/90 leading-relaxed max-w-3xl mx-auto'>
              Find the perfect space to work, study, and grow. From coworking
              areas to private offices and meeting rooms, we’ve got you covered.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/register'>
              <Button
                variant='ghost'
                size='lg'
                className='min-w-[180px] px-6 py-3 text-lg font-semibold rounded-full
    border border-white/30 text-black bg-white shadow-md 
    transition-all duration-300
    hover:bg-white/5 hover:text-white'
              >
                Get Started
                <ArrowRight className='ml-1 h-5 w-5' />
              </Button>
            </Link>
            <Link href='#'>
              <Button
                variant='ghost'
                size='lg'
                className='min-w-[180px] px-6 py-3 text-lg font-semibold rounded-full
    border border-white/30 text-white shadow-md
    bg-white/5 backdrop-blur-md'
              >
                Explore Spaces
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>1500+</div>
              <div className='text-sm text-white/80'>Members</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>24/7</div>
              <div className='text-sm text-white/80'>Access</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white'>95%</div>
              <div className='text-sm text-white/80'>Member Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved section */}
      <div className='relative bg-white rounded-t-[3rem] py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            <div className='flex items-center justify-center space-x-3'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <Building className='w-6 h-6 text-blue-600' />
              </div>
              <div className='text-left'>
                <div className='font-semibold text-gray-900'>Modern Spaces</div>
                <div className='text-sm text-gray-600'>Premium facilities</div>
              </div>
            </div>
            <div className='flex items-center justify-center space-x-3'>
              <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                <Users className='w-6 h-6 text-purple-600' />
              </div>
              <div className='text-left'>
                <div className='font-semibold text-gray-900'>Community</div>
                <div className='text-sm text-gray-600'>Network & grow</div>
              </div>
            </div>
            <div className='flex items-center justify-center space-x-3'>
              <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                <Wifi className='w-6 h-6 text-orange-600' />
              </div>
              <div className='text-left'>
                <div className='font-semibold text-gray-900'>Technology</div>
                <div className='text-sm text-gray-600'>High-speed internet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
