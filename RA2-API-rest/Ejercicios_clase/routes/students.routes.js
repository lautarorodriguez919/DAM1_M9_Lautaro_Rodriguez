import { Router } from "express";
import * as studentsController from "../controllers"

const router = Router();

router.get("/", studentsController.getAll);
router.get("/:id", studentsController.getId);
router.get("/", studentsController.create);
router.get("/:id", studentsController.update);
router.get("/:id", studentsController.remove);


router.get("/:id", studentsController.remove);

export default router;