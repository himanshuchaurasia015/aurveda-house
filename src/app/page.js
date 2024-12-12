"use client";

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enter, setenter] = useState(false);

  const images = [
    {
      label: "Strength",
      src: "men_yoga_classes_gym.jpg",
    },
    {
      label: "Mobility",
      src: "women_yoga_classes_fitness.jpg",
    },
    {
      label: "Drills",
      src: "women_yoga_classes_gym.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-sans">
      <Head>
        <title>Hover Expand Images</title>
      </Head>
      <div className="flex w-4/5 overflow-hidden rounded-[30px] bg-white border-[1.5px] border-black">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-1 transition-[flex] duration-300 ease-in-out ${
              activeIndex === index ? "flex-[3]" : "flex-[1]"
            }`}
            onMouseEnter={() => {
              setActiveIndex(index);
              setenter(true);
            }}
            onMouseLeave={() => {
              setenter(false);
            }}
          >
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-5 text-white text-3xl">
              {image.label.toUpperCase()}
            </span>
            <span
              className={`absolute top-5 right-10 text-black shadow-md rounded-[50%] bg-white py-1 text-2xl px-3 font-extrabold transition-opacity duration-300 ${
                activeIndex === index && enter ? "opacity-100" : "opacity-0"
              }`}
            >
              {`>`}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        div {
          height: 400px; /* Fixed height */
        }
      `}</style>
    </div>
  );
}
