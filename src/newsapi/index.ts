export default function makeNewsApiRoutes (app) {
    app.get("/", (req, res) => res.json({ ok: "mantap" }))
}
