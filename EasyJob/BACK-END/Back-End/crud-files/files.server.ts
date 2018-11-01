import { Router } from "express";
import { uploadFile, getFiles, getResume } from "./files.service";
import { fileStorage, getCandidateFile } from "../Models/file-schema";
import { authenticate } from "passport";
import * as multer from "multer";
import "../jwt-auth";
const router: Router = Router();

const upload = multer({ storage: fileStorage });

router.get("/", getFiles);

router.get("/resume/:id", getResume);

router.post(
  "/upload",
  authenticate("jwt", { session: false }),
  upload.single("files"),
  uploadFile
);

export default router;
