"use client";
import { useState } from "react";

import { RandomFox } from "@/components/RandomFox";


//function to generate a random number
const random = ():number => Math.floor(Math.random() * 123) + 1;
const image:string = `https://randomfox.ca/images/${random()}.jpg`;

export default function Home() {
  //state to put many images
const [images, setImages] = useState<string[]>([
  `https://randomfox.ca/images/${random()}.jpg`,
  `https://randomfox.ca/images/${random()}.jpg`,
  `https://randomfox.ca/images/${random()}.jpg`,
  `https://randomfox.ca/images/${random()}.jpg`
]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      {images.map((image, index) => (
        <div className="flex p-4 justify-between" key={index}>
          <RandomFox  image={image} alt={`random fox`} />
        </div>
        
      ))}

      
    </main>
  )
}
