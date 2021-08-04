import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createThread, getThreads, getThread, updateThread, deleteThread } from "../controllers/threads.js"

const router = Router()

router.post("/threads", restrict, createThread)
router.get("/threads", getThreads)
router.get("/threads/:id", getThread)
router.put("/threads/:id", restrict, updateThread)
router.delete("/threads/:id", restrict, deleteThread)

export default router