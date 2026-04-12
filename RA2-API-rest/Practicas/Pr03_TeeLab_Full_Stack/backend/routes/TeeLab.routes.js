import { Router } from "express"
import {getAll, getById} from "../controller/TeeLabController.js"

const router = Router()

router.get("/", getAll)
router.get("/:id", getById)

export default router