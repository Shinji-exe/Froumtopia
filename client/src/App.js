import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import Home from "./screens/home/Home";
import SignIn from "./screens/sign-in/SignIn";
import SignUp from "./screens/sign-up/SignUp";
import SignOut from './screens/signout/SignOut';
import EditThread from "./screens/Threads/EditThread";
import ThreadCard from "./screens/Threads/ThreadCard";
import Gaming from "./screens/Threadcss/Gaming";
import Comics from "./screens/Threadcss/Comics";
import CreateThread from "./screens/Threads/createthread";
// import Home from "./screens/Home/Home";

// import Home from "./screens/Home/Home";
import Categories from "./screens/Categories/Categories";


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
      <Route exact path="/threads-create">
        <CreateThread user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route exact path = "/threads-gaming">
        <Gaming user={user} setUser={setUser}/>
      </Route>
      <Route exact path ="/threads-comic">
        <Comics user={user} setUser={setUser}/>
      </Route>
      <Route path="/sign-out">
        <SignOut setUser={setUser} />
      </Route>
      <Route exact path="/threads-edit/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Route exacts path="/threads/:id">
        <ThreadCard user={user} setUser={setUser}/>
      </Route>
      <Route path="/categories">
        <Categories user={user} setUser={setUser}/>
      </Route>
      
    </div>
  )
}

export default App;

