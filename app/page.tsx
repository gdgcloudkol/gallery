import { Suspense } from "react";
import Gallery from "../components/Gallery";
import { getPhoto } from "@/services/gphoto.service";
import Header from "@/components/Header";

const GalleryWrapper = async ({ id }: { id: string }) => {
  const data = await getPhoto(`${process.env.GAL_API}${id}` || "");

  return (
    <section className='w-full flex flex-col items-start justify-start space-y-4  '>
      <div className='flex flex-wrap items-center justify-evenly gap-2'>
        {data?.images && data.images[0] ? (
          <Gallery urls={data?.images} id={`${process.env.GAL_API}${id}`} />
        ) : (
          <>No images found</>
        )}
      </div>
    </section>
  );
};

export default async function Page({ searchParams }: { searchParams: any }) {
  const data = await getPhoto(`${process.env.GAL_API}${searchParams.id}` || "");

  return (
    <>
      {" "}
      <Header title={data?.title} id={searchParams.id} />
      <main className='w-full max-w-7xl mx-auto flex flex-col items-center justify-between p-6'>
        {searchParams?.id ? (
          <Suspense fallback={<>Loading...</>}>
            <GalleryWrapper id={searchParams.id} />
          </Suspense>
        ) : (
          <>No album detected!!</>
        )}
      </main>
    </>
  );
}
