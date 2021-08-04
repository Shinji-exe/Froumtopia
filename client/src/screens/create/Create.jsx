import { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import { createPost } from "../../services/post"
import { useHistory } from 'react-router'

export default function NewPost(props) {
  const [input, setInput] = useState({ body: "", imgUrl: "" })


  const handleChange = (e) => {
    const { id, value } = e.target

    setInput(prevInput => ({
      ...prevInput,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(input);

  }
  return (
    // <Layout user={props.user} setUser={props.setUser}>
    <div>
      new post
      <form onSubmit={handleSubmit}>
        <label>Post:</label>
        <input id="body" value={input.body} onChange={handleChange} />
        <label>Image URL:</label>
        <input id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
    // </Layout>
  )
}
