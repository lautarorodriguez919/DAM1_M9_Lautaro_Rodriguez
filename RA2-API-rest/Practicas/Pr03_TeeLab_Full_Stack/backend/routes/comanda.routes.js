import { Router } from "express"
import {postComanda,getAllComandas,getComandaById} from "../controller/comanda.controller.js"

const router = Router()

router.post("/", postComanda)          // POST /api/comandas
router.get("/", getAllComandas)        // GET /api/comandas
router.get("/:id", getComandaById)    // GET /api/comandas/ORD-0001

export default router