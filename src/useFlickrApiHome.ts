import { useState, useEffect } from "react";

type useFlickrApiHomeProps = {
  albumId: string;
};

interface UseFlickrApiHomeResponse {
  album: Photo | null;
  isLoading: boolean;
}
interface Photo {
  id: string;
  server: string;
  secret: string;
  title: {
    _content: string;
  };
  count_photos: string;
  primary: string;
}

type FlickrApiResponse = {
  photoset: Photo;
};

const useFlickrApiHome = ({
  albumId,
}: useFlickrApiHomeProps): UseFlickrApiHomeResponse => {
  const [album, setAlbum] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const AlbumUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${apiKey}&photoset_id=${albumId}&user_id=194219353%40N05&format=json&nojsoncallback=1`;

    fetch(AlbumUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data: FlickrApiResponse) => {
        setAlbum(data.photoset);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Couldn't load album photos: ", error);
      });
  }, [albumId]);

  return { album, isLoading };
};

export default useFlickrApiHome;
