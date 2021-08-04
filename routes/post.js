import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createPost, getPosts, getPost, updatePost, deletePost} from "../controllers/post.js"

const router = Router()

router.post("/threads/:id/posts", restrict, createPost)
router.get("/posts", getPosts)
router.get("/posts/:id", getPost)
router.put("/posts/:id", restrict, updatePost)
router.delete("/posts/:id", restrict, deletePost)

export default router