import { Router } from "express"
//import restrict from "../helpers/restrict.js"
import { signUp, signIn, verify, getUsers, getUser, updatePassword } from "../controllers/user.js"
// import { updatePassword } from "../client/src/services/user.js"

const router = Router()

router.post("/sign-up", signUp)
router.post("/sign-in", signIn)
router.get("/verify", verify)
router.get("/users", getUsers)
router.get("/users/:id", getUser)
// router.put("/users/:id", restrict, updateUser)
router.put("/users", updatePassword)


export default router