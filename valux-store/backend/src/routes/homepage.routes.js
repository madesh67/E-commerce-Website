import express from "express";

import { getHomepage } from "../controllers/homepage.controller.js";

const router = express.Router();

router.get("/homepage", getHomepage);

export default router;
