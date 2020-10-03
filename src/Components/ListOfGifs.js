import React from "react"
import Gif from '../Components/Gif'

export default function ListOfGifs ({gifs}) {
  return gifs.map(({id, title, url})  =>
    <Gif
      key={id}
      title={title}
      url={url}
    /> 
  )
}