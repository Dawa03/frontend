addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addBtn").addEventListener("click", addsong)
})

// add the song to the database
async function addsong() {

    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value
            ? document.querySelector("#genre").value.split(",").map(item => item.trim())
            : [],
        username: localStorage.getItem("uname")
    }

    const response = await fetch(`${API_BASE_URL}/songs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })

    if (response.ok) {
        const result = await response.json()
        alert("Added song with ID of " + result._id)

        // reset the form
        document.querySelector("form").reset()
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}