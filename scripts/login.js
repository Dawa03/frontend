window.addEventListener("load", function () {
  document.querySelector("#loginBtn").addEventListener("click", loginUser)
})

async function loginUser() {
  const message = document.querySelector("#message")
  message.textContent = ""

  const loginCredentials = {
    username: document.querySelector("#username").value.trim(),
    password: document.querySelector("#password").value
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials)
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error || "Login failed")

    localStorage.setItem("token", data.token)
    localStorage.setItem("uname", data.username2)
    localStorage.setItem("auth", data.auth)
    window.location.replace("index.html")
  } catch (error) {
    message.textContent = error.message
  }
}
