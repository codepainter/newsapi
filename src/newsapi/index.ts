import { Application } from "express"

export default function makeNewsApiRoutes (app: Application) {
    app.get("/", (_req, res) => res.json({ get: "mantap" }))
    app.post("/", (_req, res) => res.json({ post: "mantap" }))
}
