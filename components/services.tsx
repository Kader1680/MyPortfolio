"use client";

import React from "react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  fiverrUrl: string;
  price?: string;
}

const services: Service[] = [
  {
    title: "Build Full Web Application",
    description: "Complete full-stack web app development (frontend + backend) using technologies like Laravel, React, MySQL, and REST APIs.",
    imageUrl: "/build-a-responsive-landing-page-in-20-hours.png",
    fiverrUrl: "https://www.fiverr.com/ouldhenniaabdel/build-a-responsive-landing-page-in-20-hours",
    price: "$50+",
  },
  {
    title: "Custom Dashboard Development",
    description: "Interactive and responsive admin dashboards with charts, analytics, and CRUD operations.",
    imageUrl: "/dashboard.png",
    fiverrUrl: "https://www.fiverr.com/ouldhenniaabdel/build-full-website-application-with-laravel-and-php",
    price: "$30+",
  },

  
  {
    title: "Landing Page or Portfolio",
    description: "Responsive and attractive landing pages or portfolio websites tailored to your brand.",
    imageUrl: "/maxresdefault.jpg",
    fiverrUrl: "https://www.fiverr.com/ouldhenniaabdel/be-your-html-css-bootstrap-and-javascript-coder",
    price: "$60+",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-transparent text-white">
      <div className="mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-[#20c300] text-center mb-12">My Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-[#111] rounded-lg shadow-lg overflow-hidden">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#20c300] mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.price && (
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Starting at:</strong> {service.price}
                  </p>
                )}
                <a
                  href={service.fiverrUrl}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-[#20c300] text-black font-semibold rounded hover:bg-[#1aa300] transition"
                >
                  View on Fiverr
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
