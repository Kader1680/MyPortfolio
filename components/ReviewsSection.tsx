"use client";

import React from "react";

interface Review {
  imageUrl: string;
  alt: string;
}

const reviews: Review[] = [
  {
    imageUrl: "/1754385870505.jpg",
    alt: "Client Review 1",
  },
  {
    imageUrl: "/rv (1).png",
    alt: "Client Review 2",
  },
  {
    imageUrl: "/rv (2).png",
    alt: "Client Review 3",
  },
  
  {
    imageUrl: "/rv (3).png",
    alt: "Client Review 3",
  },
  
  {
    imageUrl: "/rv (4).png",
    alt: "Client Review 3",
  },

  
  {
    imageUrl: "/imgt.jpg",
    alt: "Client Review 3",
  }
];

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-transparent text-white">
      <div className="mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-[#20c300] text-center mb-12">Client Reviews</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-lg shadow-lg overflow-hidden border border-gray-800"
            >
              <img
                src={review.imageUrl}
                alt={review.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
