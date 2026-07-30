addEventListener("DOMContentLoaded", function () {
  document.querySelector("#registerBtn").addEventListener("click", registerUser)
})

async function registerUser() {
  const message = document.querySelector("#message")
  message.textContent = ""

  const user = {
    username: document.querySelector("#username").value.trim(),
    password: document.querySelector("#password").value,
    status: document.querySelector("#status").value.trim() || "active"
  }

  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Could not create user")
    }

    message.textContent = "Account created. You can now log in."
    document.querySelector("form").reset()
  } catch (error) {
    message.textContent = error.message
  }
}
