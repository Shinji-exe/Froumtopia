// import React, { useState } from 'react'
// import Layout from '../../components/Layout'

// export default function HomeScreen(props) {
//     const [ threads, setTheards ] = useState({})

//     return (
//         <Layout>
//             <div>
//                 <h1>Trending Now</h1>
//                 <div className = "together">
//                     <div className = "first">
//                         <div className = "move">
//                         <h3>They Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
//                         </div>
//                     </div>
//                     <div className = "second">
//                         <h3>Happy Spider-Man day</h3>
//                     </div>
//                     <div className = "third">
//                         <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
//                     </div>
//                     <div className = "fourth">
//                         <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

import { useState, useEffect } from 'react'
import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/post.js"
import { Link } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getAllPosts = async () => {
      let data = await getPosts()
      setPosts(data)
    }
    getAllPosts()
  }, [])

  // const displayEditLink = (todo) => {
  //   if (todo.userId === props.user?.id) {
  //     return <Link to={`/edit-todo/${todo._id}`}>Edit</Link>
  //   }
  // }

  return (
    // <Layout user={props.user} setUser={props.setUser}>
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.body}
        </div>
      ))}
    </div>

    // </Layout>
  )
}


