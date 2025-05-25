'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            UniPod
          </Link>
        </div>
        
        <div className="flex items-center">
          <span className="text-lg font-bold text-gray-600">PROTOTYP</span>
        </div>
      </nav>
    </header>
  );
}; 