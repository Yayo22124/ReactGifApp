import { useEffect, useState } from "react";

import { GifItem } from "../GifItem/GifItem";
import { Loader } from '../loader/Loader';
import { getGifs } from "../../core/helpers/getGifs";
import { iCategory } from "../../core/interfaces/iCategory.interface";
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
