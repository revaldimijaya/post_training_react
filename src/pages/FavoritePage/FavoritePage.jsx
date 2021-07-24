import React, { useState, useEffect } from 'react' //imrse
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import NavBar from '../../components/Header/NavBar'
import { albums, initializeData } from "../../Helper/storage";
import SongList from '../../components/SongList/SongList'

function FavoritePage(){
    initializeData()
    const tracks = albums
    console.log(tracks)
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

export default FavoritePage