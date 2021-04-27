import express from "express";
const router = express.Router();

import { signin, signup, ping } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/ping", ping);

export default router;
