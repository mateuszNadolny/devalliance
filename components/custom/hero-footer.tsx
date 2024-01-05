'use client';
import { useRef } from 'react';
import Link from 'next/link';

import { useInView } from 'framer-motion';
import { Button } from '../ui/button';

const HeroFooter = () => {
  const ref = useRef<null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center h-[200px] text-center lg:h-[400px]">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mb-4">
        Get started with DevAlliance now
      </h2>
      <Button>
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </div>
  );
};

export default HeroFooter;
