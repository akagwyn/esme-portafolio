import useFlickrApiHome from "./useFlickrApiHome";

export default function PlaceholderSkeletonGallery() {
  const { album } = useFlickrApiHome({ albumId: "1" });
  const quantityOfPhotos = album?.count_photos;
  let skeleton: Skeleton[] = [];

  interface Skeleton {
    id: number;
  }
  if (quantityOfPhotos) {
    skeleton = Array.from({ length: 12 }, (_, index) => ({
      id: index + 1,
    }));
  }

  return (
    <main className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
      {skeleton.map((i) => (
        <div
          className="w-screen h-[500px] md:h-[350px] md:w-full bg-zinc-300 animate-pulse"
          key={i.id}
        />
      ))}
    </main>
  );

  //   return (
  //     <div>
  //       <p>hola</p>
  //     </div>
  //   );
}
