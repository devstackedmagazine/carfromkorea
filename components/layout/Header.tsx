"use client";

import Navigation from "../layout/Navigation";
// @ts-ignore
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={variants.fadeInDown}
      className="px-[20px] sm:px-[50px] lg:px-[80px] xl:px-[100px] flex justify-between items-center h-28 bg-background relative z-[100]"
    >
      <h3 className="font-bold text-off-white">CARFROMKOREA</h3>

      <Navigation />

      <Link href="/inventory" className="hidden lg:block">
        <Button variant="luxe" size="md">
          Explore Collection
        </Button>
      </Link>
    </motion.header>
  );
}
