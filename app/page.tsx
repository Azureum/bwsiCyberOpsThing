"use client";
import React from 'react';
import GeolocationComponent from './geo';


export default function Home() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-center bg-red-700">
  <section className="flex flex-col items-center">
    <h1 className="text-7xl text-white">CLOSE YOUR IPAD NOW! </h1>
    <h2 className="text-3xl text-white"><GeolocationComponent /></h2>
    <h1 className="text-2xl text-white font-bold">YOU'VE BEEN HACKED! IF YOU PLAY ANY OTHER ROBLOX GAME, YOUR IPAD WILL BLOW UP</h1>
    
  </section>
</main>
  );
}
