import { GifItem, Loader } from "../";

import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading} = useFetchGifs( category );

  

  return (
    <div>
      <Loader isLoading={isLoading}/>
      <h3 className="text-xl font-semibold">{category.name}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image}></GifItem>
        ))}
      </div>
    </div>
  );
};
