import { useEffect, useState } from "react";

import { getGifs } from "../core/helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();

    return () => {};
  }, []);

  return {
    images,
    isLoading,
  };
};
