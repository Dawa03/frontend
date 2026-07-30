addEventListener("DOMContentLoaded", async function () {
    const username = localStorage.getItem("uname")
    const response = await fetch(`${API_BASE_URL}/songs?username=${encodeURIComponent(username)}`)

    if (!response.ok) {
        document.querySelector("#list_of_songs").innerHTML = "<li>Could not load songs.</li>"
        return
    }

    const songs = await response.json()
    let html = ""

    for (let song of songs) {
        const songID = song._id
        html += `<li>${song.title} - ${song.artist || "Unknown artist"} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html || "<li>You have not added any songs yet.</li>"
})
