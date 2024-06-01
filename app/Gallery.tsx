"use client";
import Card from "@/components/Card";
import { extractAspectRatio, findClosestAspectRatio } from "@/lib/utils";
import React, { useState } from "react";

interface GalleryProps {
  urls: string[];
}

const GalleryLocal: React.FC<GalleryProps> = ({ urls }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, urls.length));
  };
  const aspectRatios = urls.map((url) => {
    const aspectRatio = extractAspectRatio(url);
    if (aspectRatio) {
      return {
        url,
        aspectRatio: findClosestAspectRatio(aspectRatio) || "1:1",
      };
    } else {
      return { url, aspectRatio: "1:1" };
    }
  });
  return (
    <div className='w-full '>
      {/* flex layout */}
      <div className='flex gap-1 items-center justify-start flex-wrap flex-1'>
        {/* masonry */}
        {/* <div className='columns-2 sm:columns-2 md:columns-3 lg:columns-5'> */}
        {/* fixed grid */}
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'> */}
        {aspectRatios
          .slice(0, visibleCount)
          .map(({ url, aspectRatio }, index) => (
            <div key={index} className={``}>
              <Card url={url} key={index} />
            </div>
          ))}
      </div>
      {visibleCount < urls.length && (
        <div className='flex justify-center mt-4'>
          <button
            onClick={loadMore}
            className='px-4 py-2 border border-blue-500 text-blue-500 bg-transparent rounded hover:bg-blue-600 hover:text-white duration-100'
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryLocal;
