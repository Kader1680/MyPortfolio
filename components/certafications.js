// components/Certificates.js
'use client' 
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certificatesData = [
  { id: 1, title: 'Object Oriented Programming PHP', imgSrc: '/php.jpg' },
  { id: 3, title: 'OOP in C++ - React', imgSrc: '/cpp.jpg' },
  { id: 3, title: 'Javascript Intermediare - React', imgSrc: '/js.png' },
  { id: 3, title: 'Web Fundamentals - React', imgSrc: '/web.png' },
  { id: 3, title: 'Internship Backedn Web', imgSrc: '/inter.png' },
  { id: 3, title: 'Problem Solving Basic Harckerrank', imgSrc: '/problemSolving.jfif' },
  
];

const Certifications = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="bg-white dark:bg-gray-900 py-10">
      <h2 className="text-center text-3xl font-semibold text-gray-800 dark:text-white mb-8">
        My Certifications
      </h2>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              className={`relative shadow-lg rounded-lg overflow-hidden cursor-pointer 
                transform transition duration-300 ${
                  hoveredId === cert.id ? 'scale-105' : ''
                }`}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={cert.imgSrc}
                alt={cert.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
