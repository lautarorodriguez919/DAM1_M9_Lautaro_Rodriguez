import { Router } from "express"
import {getAll, getById} from "../controller/TeeLabController.js"

const router = Router()

router.get("/", getAll)        // GET /api/camisetas
router.get("/:id", getById)   // GET /api/camisetas/123

export default router