import { useEffect, useState } from "react";

import { GifItem } from "../GifItem/GifItem";
import { getGifs } from "../../core/helpers/getGifs";
import { iCategory } from "../../core/interfaces/iCategory.interface";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();

    return () => {};
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold">{category.name}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {images.map(({id, title, url}) => (
            <GifItem key={ id } title={title} url={url}></GifItem>
        ))}
      </div>
    </div>
  );
};
