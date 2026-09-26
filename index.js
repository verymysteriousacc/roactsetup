export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === "/start" && request.method === "POST") {
      return fetch("https://stick-mens-month-vice.trycloudflare.com/start", {
        method: "POST"
      })
    }

    return new Response("Not found", { status: 404 })
  }
}