import { nanoid } from "nanoid";
import URL from "../Models/url.js";
export async function shortUrl (req, res) {

    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }
const shortId = nanoid(8);
await URL.create({ shortId, shortId: req.body.url , visitHistory: [] });
res.json({ id : shortId });
}

