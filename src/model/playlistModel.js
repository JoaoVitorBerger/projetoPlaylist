let playlistList = []
const playlistControler = {
    create(name, tags){
        const playlist = {
            id: Date.now().toString(),
            name:name,
            tags:[...tags],
            musics: []
        }
        playlistList.unshift(playlist)
    },
    insertMusic(idPlaylist,title, year, artist, album){
       let playListItem = playlistList.find(list=>list.id === idPlaylist)
       let findIndexPlaylist = playlistList.findIndex(list=>list.id === idPlaylist)
       playListItem.musics.push(music.create(title,year,artist,album))
       playlistList[findIndexPlaylist] = {...playlistList[findIndexPlaylist], ...playListItem}
    },
    deleteMusic(idPlaylist,idMusic){
       let playListItem = playlistList.find(list=>list.id === idPlaylist)
       playListItem.music = playListItem.musics.filter(list=>list.id !== idMusic)
       let findIndexPlaylist = playlistList.findIndex(list=>list.id === idPlaylist)
       playlistList[findIndexPlaylist] = {...playlistList[findIndexPlaylist], ...playListItem}
    },
    deletePlaylist(idPlaylist){
        console.log(idPlaylist)
        playlistList = playlistList.filter(list=>list.id !== idPlaylist)
        console.log(playlistList)
    },
    updatePlayst(idPlaylist,name,tags){
        let playListItem = playlistList.find(list=>list.id === idPlaylist)
        playListItem.name = name
        playListItem.tags = tags
        let findIndexPlaylist = playlistList.findIndex(list=>list.id === idPlaylist)
        playlistList[findIndexPlaylist] = {...playlistList[findIndexPlaylist], ...playListItem}
    },
    getPlaylistById(id){
        let findIndexPlaylist = playlistList.findIndex(list=>list.id === id)
        return playlistList[findIndexPlaylist]
    },
    getAllPlaylists(){
        return playlistList
    }
}
const music = {
    create(title, year, artist, album){
        const music={
            id: Date.now().toString(),
            title:title,
            year:year,
            artist:artist,
            album:album
        }
    return music
    }
}
module.exports = playlistControler