import { Router } from "express";
import { createUsers, deleteUsers, getAllUsers, updateUser } from "../controllers/userController";

const router = Router()

router.get("/", getAllUsers)
router.post("/", createUsers)
router.put("/", updateUser)
router.delete("/", deleteUsers)

export default router