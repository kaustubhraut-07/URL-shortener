import express from "express";
import { shortUrl,getRedirecturl,analytics } from "../controllers/urls.js";

const router  = express.Router();

router.post("/", shortUrl);
router.get("/:shortId", getRedirecturl);
router.get("/analytics/:shortId", analytics);
export default router;

//FEDYhqb8