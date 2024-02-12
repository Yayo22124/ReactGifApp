
export const GifItem = ({title, url}) => {
  return (
    <article className={'shadow-md relative bg-gray-500/50 rounded-md flex flex-col items-center justify-center content-center '}>
        <img src={url} alt={title} className="w-full rounded-tr-md rounded-tl-md"/>
        <h3 className="flex-1 mt-2 font-bold absolute bottom-0 bg-white w-full text-black text-balance rounded-br-md rounded-bl-md text-center">{title}</h3>
    </article>
  )
}
