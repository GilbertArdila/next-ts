import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  image: string;
  alt: string;
}

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  return (
    <LazyLoadImage
      className="w-full h-80 rounded-lg shadow-lg"
      src={image}
      alt={alt}
      effect="blur"
    />
  );
};
