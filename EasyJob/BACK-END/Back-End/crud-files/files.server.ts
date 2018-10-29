import { Router } from "express";
import { uploadFile, getFiles } from "./files.service";
const router: Router = Router();

router.get("/", getFiles);

router.post("/upload", uploadFile);

export default router;
