'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import HeroBanner from './hero-banner';
import { Button } from '../ui/button';

const WelcomeSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.2,
        ease: 'easeInOut'
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-[700px] flex flex-col items-center text-center mt-24 block lg:min-h-screen">
        <motion.h1 className="text-2xl font-extrabold tracking-tight lg:text-4xl" variants={item}>
          Unite. Code. Innovate.
        </motion.h1>
        <motion.h2
          className="w-full mt-2 mb-6 text-lg font-regular tracking-tight lg:text-3xl"
          variants={item}>
          Join DevAlliance - Your Hub for Collaborative Coding Projects
        </motion.h2>
        <motion.div variants={item} className="w-[300px] h-[300px] lg:w-auto lg:h-auto">
          <Image src={'/logo.png'} alt="DevAlliance Logo" width={400} height={400} />
        </motion.div>
        <motion.h2 className="text-3xl font-extrabold tracking-tight mt-7 mb-16" variants={item}>
          DevAlliance
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={item}>
          <Button>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
