import React, { useState, useEffect } from 'react' //imrse
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import NavBar from '../../components/Header/NavBar'
import './ArtistPage.css'

function ArtistPage(){
    const [albums, setAlbums] = useState([])
    const [artists, setArtists] = useState([])
    const [search, setSearch] = useState('a')

    useEffect(() =>{
        
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(search)}`)
        .then(res => res.json())
        .then(data => {
            console.log("data " +data.data)
            if(data.data !== undefined && data.data.length !== 0){
                setAlbums(data.data.albums)
                setArtists(data.data)
            }
        })
    },[search])

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="py-4 max-w-7xl m-auto">
                <div class="p-8">
                    
                    <div class="bg-white flex items-center rounded-full shadow-xl">
                        <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search Artist Name" onChange={(event) => {
                          setSearch(event.target.value)  
                          console.log(search)
                        } }></input>
                        <div className="px-4">
                        </div>
                    </div>
                </div>
            </div>
             
            <div className="container py-4">
                {albums?.map(album=>{
                    return (
                        <AlbumCard album={album} artist={artists}  />
                    )
                })} 
            </div>
            
        </div>
    )
}

export default ArtistPage