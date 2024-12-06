import { nanoid } from "nanoid";
import URL from "../Models/url.js";
export async function shortUrl (req, res) {

    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }
const shortId = nanoid(8);
await URL.create({ shortId: shortId , redirectURL: req.body.url , visitHistory: [] });
res.json({ id : shortId });
};





export async function getRedirecturl (req, res) {
    const shortId = req.params.shortId;
    console.log(shortId);
    const url = await URL.findOne({ shortId: shortId });
    console.log(url , "url");
    if (!url) {
        return res.status(404).json({ error: "url not found" });
    }
    url.visitHistory.push( { timestamps: Date.now() } );
    await url.save();
    res.redirect(url.redirectURL);
};



export async function analytics(req, res){
    try {
        const shortId = req.params.shortId;
        console.log(shortId);
        const url = await URL.findOne({ shortId: shortId });
        console.log(url , "url");
        if (!url) {
            return res.status(404).json({ error: "url not found" });
        }
        res.status(200).json({ visitHistory: url.visitHistory.length });



    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }

}