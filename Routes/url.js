import express from "express";
import { shortUrl,getRedirecturl } from "../controllers/urls.js";

const router  = express.Router();

router.post("/", shortUrl);
router.get("/:shortId", getRedirecturl);

export default router;

//FEDYhqb8