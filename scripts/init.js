window.addEventListener("DOMContentLoaded", function () {
  window.authManager = new Auth()

  const logoutBtn = document.querySelector("#logoutBtn")
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      window.authManager.logout()
    })
  }
})
