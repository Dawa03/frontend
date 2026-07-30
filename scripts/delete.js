addEventListener("DOMContentLoaded", async function () {
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong)
    getAllSongs()
})

async function getAllSongs() {
    const username = localStorage.getItem("uname")
    const response = await fetch(`${API_BASE_URL}/songs?username=${encodeURIComponent(username)}`)

    if (response.ok) {
        const songs = await response.json()

        let html = ""

        for (let song of songs) {
            html += `<option value="${song._id}">${song.title}</option>`
        }
        document.querySelector("#songDropDown").innerHTML = html
    }    
}

async function deleteSong() {
    //get the song id
    const selectedSong = document.querySelector("#songDropDown option:checked")
    if (!selectedSong) {
        document.querySelector("#error").textContent = "There are no songs to delete"
        return
    }
    const songID = selectedSong.value
    const response = await fetch(`${API_BASE_URL}/songs/${songID}`, {
        method: "DELETE"
    })
    if (response.ok) {
        alert("Song deleted successfully")
        getAllSongs()
    }
    else {
        document.querySelector("#error").innerHTML = "Error deleting song"
    }
}