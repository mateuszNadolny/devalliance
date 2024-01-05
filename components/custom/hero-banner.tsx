'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useInView } from 'framer-motion';
import { Button } from '../ui/button';

import { HeroBannerProps } from '@/lib/types';

const HeroBanner = ({ title, description, image, reverse }: HeroBannerProps) => {
  const ref = useRef<null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-[80%] block mb-20 xl:w-[100%] lg:mb-0">
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          flexDirection: reverse ? 'row-reverse' : 'row',
          backgroundColor: !reverse ? 'rgba(234, 234, 234, 0.95)' : 'rgba(255, 255, 255, 0.9)'
        }}
        className="p-10 shadow-md xl:shadow-none lg:p-24 lg:flex lg:gap-8 lg:h-[800px]">
        <div className="flex justify-center flex-col gap-4 lg:flex-1">
          <h3 className="scroll-m-20 text-start text-lg lg:text-4xl font-semibold tracking-tight lg:mb-8">
            {title}
          </h3>
          <p className="text-start text-sm lg:text-lg lg:mb-4">{description}</p>
          <div className="">
            <Button className="">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="hidden mx-3 lg:block lg:flex lg:flex-1 justify-center">
          <Image
            src={`/${image}`}
            alt="DevAlliance Logo"
            width={400}
            height={400}
            className="w-[300px] h-[300px] lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
