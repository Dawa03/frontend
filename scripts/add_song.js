addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addsong) 
})

//add the song to the database.. it has to be async because we are calling data outside of our server

async function addsong(){
    //create a song object with the data from the form that the user filled out. this will make life easier when we send the data to the backend
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }
    const response = await fetch("http://localhost:3000/api/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })

    if (response.ok) {
        const result = await response.json()
        alert("Added song with ID of" + result._id)

        //reset the form after successfully adding the song
        document.querySelector("form").reset()
    } 
    else {
        document.querySelector("#error").innerHTML = "Cannot add song"

    }
}