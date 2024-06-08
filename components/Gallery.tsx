"use client";
import Arrow from "@/components/Icons/Arrow";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface GalleryProps {
  urls: string[];
  id?: string;
}

const GalleryLocal: React.FC<GalleryProps> = ({ urls, id }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const router = useRouter();
  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, urls.length));
  };

  return (
    <div className='w-full '>
      <div className='w-full flex items-center justify-between'>
        <button
          className='bg-transparent flex gap-2 text-foreground mb-4'
          onClick={router.back}
        >
          <Arrow /> Go back
        </button>
        {id && (
          <a
            href={id}
            target='_blank'
            className='md:hidden  inline-flex text-blue-400 hover:underline'
          >
            Album
          </a>
        )}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {urls.slice(0, visibleCount).map((url, index) => (
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
