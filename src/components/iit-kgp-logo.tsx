'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface IitKgpLogoProps {
    size?: 'default' | 'small';
}

const IitKgpLogo = ({ size = 'default' }: IitKgpLogoProps) => {
  return (
    <div className={cn("flex items-center iit-kgp-logo-container", size === 'small' ? 'gap-3' : 'gap-2 sm:gap-4')}>
      <div className="text-right">
        <h1 className={cn(
            "font-semibold text-foreground font-headline",
            size === 'small' ? 'text-base' : 'text-base sm:text-lg md:text-xl'
        )}>
          Indian Institute of Technology, Kharagpur
        </h1>
        <p className={cn(
            "font-medium text-muted-foreground font-headline",
            size === 'small' ? 'text-sm' : 'text-sm sm:text-base md:text-lg'
        )}>
          भारतीय प्रौद्योगिकी संस्थान, खड़गपुर
        </p>
      </div>
      <div data-ai-hint="logo university">
        <Image
          src="/iitkgp.svg"
          alt="IIT Kharagpur Logo"
          width={size === 'small' ? 48 : 64}
          height={size === 'small' ? 48 : 64}
        />
      </div>
    </div>
  );
};

export default IitKgpLogo;
