"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Wifi,
  Presentation,
  Monitor,
  MapPin,
  Coffee,
} from "lucide-react"; // choose icons that match

const Features = () => {
  const features = [
    {
      icon: <Clock className='w-8 h-8 text-blue-600' />,
      title: "Access Anytime",
      description:
        "Work on your schedule, whenever inspiration strikes. Our 24/7 access gives you the freedom to come and go as you please, fitting your unique work rhythm.",
    },
    {
      icon: <Wifi className='w-8 h-8 text-blue-600' />,
      title: "High Speed Fiber Internet",
      description:
        "Experience lightning-fast and reliable internet connectivity. Our redundant fiber ensures you're always online and productive, without worrying about interruptions.",
    },
    {
      icon: <Presentation className='w-8 h-8 text-blue-600' />,
      title: "Meeting Rooms and Event Spaces",
      description:
        "Collaborate effectively and make a lasting impression. Our well-equipped meeting rooms and versatile event space offer professional settings for meetings, presentations, workshops, and more.",
    },
    {
      icon: <Monitor className='w-8 h-8 text-blue-600' />,
      title: "Not Just a Desk",
      description:
        "Be inspired by your surroundings. Our thoughtfully designed and aesthetically pleasing workspace provides a comfortable and motivating environment to do your best work.",
    },
    {
      icon: <MapPin className='w-8 h-8 text-blue-600' />,
      title: "In the Heart of the City",
      description:
        "Positioned in a convenient and accessible area of Cebu City, Nest is situated in a prime location that offers easy commutes and access to nearby amenities, making your workday seamless.",
    },
    {
      icon: <Coffee className='w-8 h-8 text-blue-600' />,
      title: "Unlimited Coffee, Water, and Tea",
      description:
        "Stay refreshed and focused throughout your day. Enjoy complimentary, high-quality beverages to keep you energized and hydrated.",
    },
  ];

  return (
    <section id='features' className='py-20 bg-gray-50 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16 relative z-10'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Everything You Need to Succeed
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our workspaces are designed with modern professionals in mind,
            offering all the amenities and services you need to be productive.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white'
            >
              <CardContent className='p-8'>
                <div className='mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
