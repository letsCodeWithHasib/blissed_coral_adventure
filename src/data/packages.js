export const packages = [
  {
    id: 1,
    title: "Andaman Paradise Escape",
    duration: "5 Days / 4 Nights",
    price: 18999,
    originalPrice: 21999,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Port Blair", "Havelock Island"],
    description:
      "Experience the best of Andaman with this perfect getaway package",
    highlights: [
      "Cellular Jail Light Show",
      "Radhanagar Beach",
      "Snorkeling at Elephant Beach",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description:
          "Arrive at Veer Savarkar International Airport and transfer to your hotel. Later, visit Corbyn's Cove Beach and witness the Light and Sound Show at Cellular Jail.",
      },
      {
        day: 2,
        title: "Port Blair to Havelock",
        description:
          "Transfer to Havelock Island by ferry. Visit the world-famous Radhanagar Beach, rated as Asia's best beach.",
      },
      // More itinerary items...
    ],
    inclusions: [
      "Accommodation",
      "Daily Breakfast",
      "Ferry Transfers",
      "Sightseeing",
    ],
    exclusions: ["Airfare", "Personal Expenses", "Additional Activities"],
    reviews: [
      {
        user: "Rahul Sharma",
        rating: 4.8,
        comment:
          "Amazing experience! The beaches were pristine and the service was excellent.",
      },
      {
        user: "Priya Patel",
        rating: 5.0,
        comment:
          "Best vacation ever! Will definitely book again with Blissed Coral Adventure.",
      },
    ],
  },
  // Add 9 more packages following the same structure
  {
    id: 2,
    title: "Honeymoon Special Package",
    duration: "7 Days / 6 Nights",
    price: 32999,
    originalPrice: 37999,
    image:
      "https://images.unsplash.com/photo-1562602833-72b336fa9e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Port Blair", "Havelock", "Neil Island"],
    description: "Romantic getaway for couples with special arrangements",
    highlights: [
      "Candlelight Dinner",
      "Private Beach Time",
      "Couple Spa Session",
    ],
  },
  // Additional packages...
];

export const testimonials = [
  {
    id: 1,
    name: "Amit & Sneha",
    location: "Mumbai",
    rating: 5,
    text: "Our honeymoon in Andaman was magical thanks to Blissed Coral Adventure. The private beach dinner was unforgettable!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  // More testimonials...
];

export const announcements = [
  {
    id: 1,
    title: "Monsoon Special Discount",
    date: "2023-07-15",
    content:
      "Get 20% off on all packages booked for travel between June and September.",
    category: "Offer",
  },
  // More announcements...
];
