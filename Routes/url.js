import express from "express";
import { shortUrl } from "../controllers/urls.js";

const router  = express.Router();

router.post("/", shortUrl);

export default router;