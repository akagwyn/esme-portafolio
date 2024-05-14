import { useState, useEffect } from "react";

type useFlickrApi = { albumId: string };

const useFlickrApiGallery = ({ albumId }: useFlickrApi) => {
  interface Photo {
    id: string;
    server: string;
    secret: string;
    title: string;
    originalsecret: string;
    primary: string;
    url_h: string;
  }

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const GalleryUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${albumId}&user_id=194219353%40N05&extras=url_h&format=json&nojsoncallback=1`;

        const response = await fetch(GalleryUrl);

        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photoset.photo);
          setIsLoading(false);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.log("Couldn't load album:", error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return { photos, isLoading };
};

export default useFlickrApiGallery;
