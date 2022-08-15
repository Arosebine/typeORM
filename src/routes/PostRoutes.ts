import { Router } from "express";
import UserController from "../controller/UserController";


const router = Router();



router.post("/post", UserController.userPost);
router.get("/user/:id",  UserController.getOneUser);
router.patch("/user/:id",  UserController.updateUser);






export default router;