class Auth {
  constructor() {
    // Hide protected content until local authentication data is checked.
    document.body.style.display = "none"
    this.auth = localStorage.getItem("auth")
    this.validateAuth()
  }

  validateAuth() {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("uname")

    if (this.auth !== "1" || !token || !username) {
      window.location.replace("login.html")
      return
    }

    document.body.style.display = "block"
  }

  logout() {
    localStorage.removeItem("auth")
    localStorage.removeItem("token")
    localStorage.removeItem("uname")
    window.location.replace("login.html")
  }
}
