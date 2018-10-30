import { Router } from "express";
import { uploadFile, getFiles } from "./files.service";
import { fileStorage } from "../Models/gridFiles";
import { authenticate } from "passport";
import * as multer from "multer";
const router: Router = Router();

const upload = multer({ storage: fileStorage });

router.get("/:filename", getFiles);

router.post("/upload", upload.single("files"), uploadFile);

export default router;
