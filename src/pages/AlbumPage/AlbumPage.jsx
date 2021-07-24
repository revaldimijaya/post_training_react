import React, { useState, useEffect } from 'react' //imrse
import { useParams } from 'react-router-dom'
import NavBar from '../../components/Header/NavBar'
import SongList from '../../components/SongList/SongList'

function AlbumPage(){
    let {id} = useParams()
    
    const [tracks, setTracks] = useState([])
    

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data.data)
            setTracks(data.data)
        })
    }, [])

    return(
        

        <div>
            <div>
                <NavBar/>
            </div>
            <div className="max-w-7xl m-auto">
               
                <div className="text-gray-300 p-4">
                    <div className="mt-2">
                        <div className="flex font-bold text-black">
                            <div className="p-2 w-full">Title</div>
                            <div className="p-2 w-full">Preview</div>
                            <div className="p-2 w-full"></div>
                        </div>
                        {tracks?.map(track=>{
                            return(
                                <SongList track={track}/>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default AlbumPage 