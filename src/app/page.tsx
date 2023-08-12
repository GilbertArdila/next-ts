"use client";
import { useState, useEffect } from "react";
import type { MouseEventHandler } from "react";

import { RandomFox } from "@/components/RandomFox";
import { Button } from "./Button";

//function to generate a random number
const random = (): number => Math.floor(Math.random() * 123) + 1;

//generate unique id
const uuid = (): string =>
  Math.random().toString(36).substring(2) + Date.now().toString(36);

//create an Interface for the props
type ImageType = Array<{ url: string; id: string }>;

export default function Home() {
  
  //state to put many images
  const [images, setImages] = useState<ImageType>([]);
  //state to get new images
  const [newImages, setNewImages] = useState<boolean>(false);

  //useEffect to put many images on setImages
  useEffect(() => {
    const images: ImageType = [];
    for (let i = 0; i < 4; i++) {
      const id = uuid();
      const url = `https://randomfox.ca/images/${random()}.jpg`;
      images.push({ id, url });
    }
    setImages(images);
    setNewImages(false);
  }, [newImages]);

  //add new image to the array
  const addImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
   const newImage: ImageType = [];
    const id = uuid();
    const url = `https://randomfox.ca/images/${random()}.jpg`;
    newImage.push({ id, url });
    setImages([...images, ...newImage]);
   
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline m-6">Fox images</h1>
     <Button onClick={() => setNewImages(true)} text="Get new images" />

      <Button onClick={addImage} text="Add new image" />

      {images.map((image) => (
        <div className="flex p-4 justify-between" key={image.id}>
          <RandomFox image={image.url} alt="Afox image" />
        </div>
      ))}
    </main>
  );
}
