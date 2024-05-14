import { PhotoProvider, PhotoView } from "react-photo-view";
import useFlickrApiGallery from "./useFlickrApiGallery";

type FlickrGallery = { albumId: string };

export default function Gallery({ albumId }: FlickrGallery) {
  const { photos, isLoading } = useFlickrApiGallery({ albumId });
  interface Skeleton {
    id: number;
  }

  const skeleton: Skeleton[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
  }));

  if (isLoading) {
    return (
      <main className="grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-3">
        {skeleton.map((i) => (
          <div
            className="h-[500px] md:h-[850px] md:w-full bg-zinc-300 animate-pulse"
            key={i.id}
          />
        ))}
      </main>
    );
  }

  return (
    <main className={`grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-3`}>
      <PhotoProvider>
        {photos.map((photo, index) => (
          <div className="h-[500px] md:h-[850px]" key={index}>
            <PhotoView src={`${photo.url_h}`}>
              <img
                className="h-full w-full object-cover cursor-pointer"
                loading="lazy"
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
                alt={photo.title}
              />
            </PhotoView>
          </div>
        ))}
      </PhotoProvider>
    </main>
  );
}
