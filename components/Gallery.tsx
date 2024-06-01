"use client";
import { getPhoto, setSize } from "@/services/gphoto.service";
import { Gallery } from "react-grid-gallery";
import { calculateAspectRatio, minAspectRatioDimensions } from "@/lib/utils";
import { useEffect, useState } from "react";

export const GalleryWrapper = ({ id }: { id: string }) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    const response = await fetch(`/api/images`, {
      method: "POST",
      body: JSON.stringify(id),
    });
    const data = await response.json();
    setTitle(data.title);
    setImages(() =>
      data?.images?.slice(0, 10)?.map((image: string) => ({
        src: setSize(
          image.substring(0, image.length - 1),
          minAspectRatioDimensions[calculateAspectRatio(image)].width,
          minAspectRatioDimensions[calculateAspectRatio(image)].height
        ),
        width: minAspectRatioDimensions[calculateAspectRatio(image)].width,
        height: minAspectRatioDimensions[calculateAspectRatio(image)].height,
      }))
    );
  };

  return (
    <section className='w-full flex flex-col items-start justify-start space-y-4  '>
      <h1 className='text-3xl md:text-4xl lg:text-6xl'> {title}</h1>
      <div className='flex flex-wrap items-center justify-evenly gap-2'>
        {images && images[0] ? (
          // <Gallery urls={data?.images} />
          <Gallery
            images={[
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                width: 320,
                height: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)",
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                width: 320,
                height: 212,
                tags: [
                  { value: "Ocean", title: "Ocean" },
                  { value: "People", title: "People" },
                ],
                alt: "Boats (Jeshu John - designerspics.com)",
              },
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                width: 320,
                height: 212,
              },
            ]}
          />
        ) : (
          <>No images found</>
        )}
      </div>
    </section>
  );
};
