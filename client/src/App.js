import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import EditThread from "./screens/Threads/EditThread";
import ThreadCard from "./screens/Threads/ThreadCard";
import CreateThread from "./screens/Threads/CreateThread";
import Home from "./screens/Home/Home";
import Categories from "./screens/Categories/Categories";
import EditPost from "./screens/Posts/EditPost";
import PostCard from "./screens/Posts/PostCard";
import DeleteThread from "./screens/Threads/DeleteThread";
import PasswordChange from "./screens/UpdatePassword/PasswordChange";
// import UserProfile from "./screens/UserProfile/UserProfile";



function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const verifyUser = async() => {
      setUser(await verify())
    }
    verifyUser()
  }, [])
  
  return (
    <div>
      <Route exact path="/">
        <Home user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-in">
        <SignIn user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path = "/change-password">
        <PasswordChange user={user} setUser={setUser}/>
      </Route>
      <Route path="/sign-out">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/post/:id">
        <PostCard user={user} setUser={setUser} />
      </Route>
      <Route path="/threads/:id">
        <ThreadCard user={user} setUser={setUser}/>
      </Route>
      <Route path="/categories">
        <Categories user={user} setUser={setUser} />
      </Route>
      {/* <Route path="/user-profile">
        <UserProfile user={user} setUser={setUser} />
      </Route> */}
      {user &&
        <>
          <Route path="/threads-create">
            <CreateThread user={user} setUser={setUser} />
          </Route>
          <Route path="/threads-edit/:id">
            <EditThread user={user} setUser={setUser} />
          </Route>
          <Route path="/threads-delete/:id">
            <DeleteThread user={user} setUser={setUser} />
          </Route>
          <Route path="/posts-edit/:id">
            <EditPost user={user} setUser={setUser} />
          </Route>
        </>
      }
    </div>
  )
}

export default App;

