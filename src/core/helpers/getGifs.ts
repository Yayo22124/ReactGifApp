import { iCategory } from "../interfaces/iCategory.interface";

export const getGifs = async (category: iCategory) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category.name}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const res = await fetch( apiUrl );

    const { data } = await res.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.url
    }))
    
    return gifs;
}
