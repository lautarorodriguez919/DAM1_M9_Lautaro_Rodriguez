import { Router } from "express"
import {postComanda,getAllComandas,getComandaById} from "../controller/comanda.controller.js"

const router = Router()

router.post("/", postComanda)
router.get("/", getAllComandas)
router.get("/:id", getComandaById)

export default router