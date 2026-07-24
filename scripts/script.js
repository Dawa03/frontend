// we are going to make an event listener.. it will trigger with the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://backend-1-cmt4.onrender.com/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        let songID = song._id
        html+= `<li>${song.title} - ${song.artist}- <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit</a>  </li> ` 
    }

    document.querySelector("#list_of_songs").innerHTML = html

});