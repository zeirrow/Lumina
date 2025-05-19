import { AiFillPinterest } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

export const features = [
  {
    icon: "🌿",
    title: "100% Organic",
    description:
      "Made with plant-based, cruelty-free ingredients for healthy, glowing skin.",
  },
  {
    icon: "🧪",
    title: "Clinically Tested",
    description:
      "Proven results in 28 days. Backed by science and trusted by experts.",
  },
  {
    icon: "✨",
    title: "Fast-Absorbing",
    description:
      "Lightweight formula that sinks in instantly without greasy residue.",
  },
  {
    icon: "♻️",
    title: "Eco Packaging",
    description: "Recyclable glass bottles. Sustainable inside and out.",
  },
];

export const testimonials = [
  {
    name: "Sophia R.",
    quote:
      "My fine lines visibly softened after just 2 weeks. This serum is now my holy grail!",
    role: "Verified Buyer | 34 y.o.",
    img: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    verified: true,
    beforeAfter: {
      time: "4 weeks",
      improvement: 78,
    },
  },

  {
    name: "Ava R.",
    quote: `My skin has *never* felt this smooth. It's legit magic in a bottle.`,
    role: "Wellness Blogger",
    img: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    verified: true,
    beforeAfter: {
      time: "2 weeks",
      improvement: 85,
    },
  },
  {
    name: "Chloe M.",
    quote: `I tossed my $200 serum for this. It's affordable, effective, and beautiful.`,
    role: "Model & MUA",
    img: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    verified: true,
    beforeAfter: {
      time: "3 weeks",
      improvement: 90,
    },
  },
  {
    name: "Nina P.",
    quote: `I've been using it every night. People keep asking what I did differently.`,
    role: "Mom of 3 & Skincare Addict",
    img: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    verified: true,
    beforeAfter: {
      time: "1 month",
      improvement: 75,
    },
  },
  {
    name: "Jules K.",
    quote: `The glow is unreal. Plus I love that it's sustainable and smells amazing.`,
    role: "Eco Influencer",
    img: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    verified: true,
    beforeAfter: {
      time: "2 weeks",
      improvement: 80,
    },
  },
];

export const products = [
  {
    id: 1,
    name: "Lumina Renewal Serum",
    price: "$98",
    description: "Our hero anti-aging formula with bakuchiol and niacinamide",
    tag: "BESTSELLER",
    image: "/images/Lumina.png",
  },
  {
    id: 2,
    name: "Overnight Mask",
    price: "$78",
    description: "Hydrating sleep treatment with snow mushroom",
    tag: "NEW",
    image: "/images/Jennifer.png",
  },
];

export const socialIcons = [
  {
    name: "TikTok",
    icon: IoLogoTiktok,
    color: "#00F2EA",
    link: "https://www.tiktok.com/@lumina",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "#1877F2",
    link: "https://facebook.com/lumina",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#E1306C",
    link: "https://instagram.com/lumina",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    color: "#1DA1F2",
    link: "https://twitter.com/lumina",
  },
  {
    name: "Pinterest",
    icon: AiFillPinterest,
    color: "#E60023",
    link: "https://pinterest.com/lumina",
  },
];

export const steps = [
  {
    title: "Cleanse & Prep",
    description: "Start with clean skin for optimal absorption",
    icon: "1",
  },
  {
    title: "Apply Serum",
    description: "3-4 drops morning and night",
    icon: "2",
  },
  {
    title: "Lock In Moisture",
    description: "Follow with your favorite moisturizer",
    icon: "3",
  },
];

export const videoSrc = {
  videoUrl: "https://cdn.pixabay.com/video/2020/06/23/42963-434316724_large.mp4", // "https://lumina-skincare.com/videos/product-demo.mp4",
  posterUrl: "/images/Lumina.png",
};

export const beforeAfterResults = [
    {
      label: "Fine Lines",
      before: "/images/image-1.png",
      after: "/images/Jennifer.png",
    },
    {
      label: "Hydration",
      before: "/images/Jennifer.png",
      after: "/images/image-1.png",
    },
  ];






// = [
//   {
//     before: "/images/before1.jpg",
//     after: "/images/after1.jpg",
//     description: "4 weeks of use",
//   },
//   {
//     before: "/images/before2.jpg",
//     after: "/images/after2.jpg",
//     description: "2 weeks of use",
//   },
//   {
//     before: "/images/before3.jpg",
//     after: "/images/after3.jpg",
//     description: "3 weeks of use",
//   },
// ];
