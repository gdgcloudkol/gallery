"use client";
import Card from "@/components/Card";
import { useEffect, useState } from "react";


export default function Home() {
  const [imageURL, setImageURL] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      let data: any = await fetch('/api/images')
      data = await data.json()
      setImageURL(data)
    }
    fetchImages()
  }, [])
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Hello</h1>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {imageURL[0] ? imageURL.map((item, idx) =>
          <Card url={item} key={idx} />
        ) : <h1 className="text-2xl p-20">Loading...</h1>}
      </div>
    </main>
  );
}
