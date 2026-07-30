// Use the local backend during development and the Render backend when deployed.
const API_BASE_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? "http://localhost:3000/api"
  : "https://backend-1-cmt4.onrender.com/api"
