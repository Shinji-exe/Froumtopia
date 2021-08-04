import Post from "../models/post.js"
import User from "../models/user.js"
import Thread from "../models/thread.js"

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    const { id } = req.params
    const thread = await Thread.findById(id)
    const user = await User.findById(req.user)
    post.userId = user.id
    await post.save()
    user.posts.push(post._id)
    await user.save()
    thread.posts.push(post._id)
    
    await thread.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('userId').populate('threadId')
    res.json(posts)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const {id} = req.params
    const post = await Post.findById(id)
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({error: "Post not found"})
    }
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const {body} = req
    const post = await Post.findByIdAndUpdate(id, body, {new: true})
    res.send(post)
  } catch (e) {
    res.status(424).json({error: e.message})
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndDelete(id)
    res.send(post)

  } catch (e) {
    res.status(404).json({error: e.message})
  }
}