/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { setSize } from "@/services/gphoto.service";
import { calculateAspectRatio, minAspectRatioDimensions } from "@/lib/utils";
import Loader from "./Icons/Loader";
import Arrow from "./Icons/Arrow";

type Dimensions = { width: number; height: number };

function Card({ url, className }: { url: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [{ width, height }] = useState<Dimensions>(
    minAspectRatioDimensions[calculateAspectRatio(url)]
  );

  return (
    <>
      {isVisible && (
        <section className='overlay w-screen h-screen overflow-y-scroll fixed z-50 top-0 left-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-start p-6 gap-6'>
          <div className='controlsTab flex items-center gap-4 justify-between w-full px-4 max-w-6xl'>
            <button
              className='bg-transparent flex gap-2 text-white'
              onClick={() => setIsVisible(false)}
            >
              <Arrow /> Go back
            </button>
            <a
              href={setSize(url.substring(0, url.length - 1), 2160, 2160)}
              target='_blank'
              className='bg-transparent flex gap-2 text-white'
            >
              Open in album
              <span className='rotate-180'>
                <Arrow />
              </span>
            </a>
          </div>
          <div className='relative w-full h-full max-w-6xl max-h-[80vh]'>
            <img
              className='h-full w-full object-contain shadow-md'
              src={setSize(url.substring(0, url.length - 1), 1080, 1080)}
              alt=''
            />
          </div>
        </section>
      )}
      <div
        className={`bg-gray-100 flex-grow w-auto max-w-sm h-[210px] md:h-[200px] lg:h-[280px] flex items-center justify-center relative`}
        onClick={() => setIsVisible(true)}
      >
        <Loader className='animate-spin absolute z-0' />
        <img
          alt='image'
          className='z-10 object-cover w-full h-full '
          src={setSize(url.substring(0, url.length - 1), width, height)}
        />
      </div>
    </>
  );
}

export default Card;
