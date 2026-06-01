'use client';

import { Navbar } from '@/components/Navbar';
import { Home } from '@/components/Home';

export default function HomePage() {
  return (
    <div className="min-h-screen text-on-background flex flex-col bg-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' /%3E%3C/svg%3E")`
        }}
      />
      <Navbar />
      <div className="flex flex-1 flex-col">
        <Home />
      </div>
    </div>
  );
}
