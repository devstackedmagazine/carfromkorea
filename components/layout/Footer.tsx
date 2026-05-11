"use client";

// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import logo from "@/public/logos/devstacked-horizontally.svg";
// import instagram from "@/public/icons/instagram.svg";
// import tiktok from "@/public/icons/tiktok.svg";
// import discord from "@/public/icons/discord.svg";

const variants = {
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

const viewportConfig = { once: true, amount: 0.3 };

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants.staggerContainer}
      className="py-8 relative overflow-x-clip"
    >
      Footer
    </motion.footer>
  );
}
