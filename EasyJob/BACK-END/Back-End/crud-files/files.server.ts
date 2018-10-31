import { Router } from "express";
import { uploadFile, getFiles } from "./files.service";
import { fileStorage } from "../Models/gridFiles";
import { authenticate } from "passport";
import * as multer from "multer";
import "../jwt-auth";
const router: Router = Router();

const upload = multer({ storage: fileStorage });

router.get("/", getFiles);

router.post(
  "/upload",
  authenticate("jwt", { session: false }),
  upload.single("files"),
  uploadFile
);

export default router;
