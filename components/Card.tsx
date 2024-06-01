/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { setSize } from "@/services/gphoto.service";
import {
  calculateAspectRatio,
  minAspectRatioDimensions,
  truncateUrl,
} from "@/lib/utils";
import Loader from "./Loader";

type Dimensions = { width: number; height: number };

function Card({ url, className }: { url: string; className?: string }) {
  const [{ width, height }] = useState<Dimensions>(
    minAspectRatioDimensions[calculateAspectRatio(url)]
  );
  return (
    <>
      {/* FOR GRID AND FLEX */}

      <div
        className={`bg-gray-100 flex-grow w-auto max-w-sm h-[210px] md:h-[200px] lg:h-[280px] flex items-center justify-center relative`}
        style={{ width }}
      >
        {/* FOR MASONRY */}

        {/* <div
        className={`bg-gray-100 flex items-center justify-center relative m-2`}
      > */}
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
