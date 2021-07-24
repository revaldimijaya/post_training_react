const LOCAL_STORAGE_KEY = 'ALBUM_DATA';

let albums = [];

const isStorageExist = () => {
    return typeof(Storage) === undefined ? false : true;
 }

const initializeData = () => {
    if(isStorageExist()){
        if(localStorage.getItem(LOCAL_STORAGE_KEY)){
            const jsonData = localStorage.getItem(LOCAL_STORAGE_KEY);
            albums = JSON.parse(jsonData);
        }
    }
}

const saveData = () => {
    const jsonData = JSON.stringify(albums);
    localStorage.setItem(LOCAL_STORAGE_KEY, jsonData);
}

const checkData = (album) => {
    return albums.find((x) => x.id === album.id)
}

const removeData = (album) => {
    const index = albums.findIndex((x) => x.id === album.id);
    if(index !== -1){
        albums.splice(index, 1);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(albums));
}

export {
    albums,
    saveData,
    initializeData,
    checkData,
    removeData
}