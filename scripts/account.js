window.addEventListener("DOMContentLoaded", checkStatus)

async function checkStatus() {
  const token = localStorage.getItem("token")
  const message = document.querySelector("#message")
  const userList = document.querySelector("#userStatusList")

  try {
    const response = await fetch(`${API_BASE_URL}/status`, {
      headers: { "x-auth": token }
    })

    const result = await response.json()
    if (!response.ok) throw new Error(result.error || "Session is not valid")

    message.textContent = `Logged in as ${result.username}`
    userList.innerHTML = result.users
      .map(user => `<li>${user.username}: ${user.status}</li>`)
      .join("")
  } catch (error) {
    localStorage.removeItem("auth")
    localStorage.removeItem("token")
    localStorage.removeItem("uname")
    window.location.replace("login.html")
  }
}
