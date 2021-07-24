import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { albums, checkData, initializeData, removeData, saveData } from "../../Helper/storage";
function SongList(props){
    const track = props.track
    
    const [isFavorite, setFavorite ] = useState(false);

    useEffect(()=>{
        initializeData();
        const fav = checkData(track);
        
        if(fav !== undefined){
            setFavorite(true)
        }
    })

    const addFavorite = () => {
        albums.push(track)
        saveData();
        setFavorite(true);
    };
    
    const removeFavorite = () => {
        removeData(track);
        setFavorite(false);
    }

    const renderButton = () =>{
        if (isFavorite){
            return (
                <button onClick={removeFavorite} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 m-2 px-4 rounded-full">
                    Remove Favorite
                </button>
            )
        } else {
            return (
                <button onClick={addFavorite} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 m-2 px-4 rounded-full">
                    Add to Favorite
                </button>
            )
        }
    }

    return(
        <div className="flex border-b items-center text-black border-gray-800 hover:bg-gray-200">
            <div className="p-2 w-full">{track.name}</div>
            <div className="p-2 w-full">
                <audio controls>
                    <source src={track.preview_url}/>
                </audio>
            </div>
            <div className="p-2 w-full">
                {renderButton()}
            </div>
        </div>
    )
}

export default SongList