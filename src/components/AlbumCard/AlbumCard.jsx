import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
function AlbumCard(props){
    const album = props.album
    const artist = props.artist
    const url = `/album/${album.id}`

    return(
        
        <Link to={url} className="bg-white rounded shadow-lg" key={album.id}>
            <img className="w-full object-cover" src={album.image} alt=""></img>
            <div className="p-2">
                <h3 className="card-title">{album.name}</h3>
                <p className="text-gray-400">{artist.name}</p>
            </div>
        </Link>
        
    )
}

export default AlbumCard