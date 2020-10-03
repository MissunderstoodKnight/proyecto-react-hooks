import React, { useEffect, useState} from 'react'
import ListOfGifs from '../../Components/ListOfGifs'
import getGifs from '../../Services/getGifs'

export default function SearchResults ({params}) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])
    useEffect(function () {
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
        })
    }, [keyword])

    return <>
        <ListOfGifs gifs={gifs} />
    </>
}