import Navbar from "./components/nav/NavBar"
// import "./components/nav/NavBar.css"
import {Route} from "react-router-dom"
import Background from  "./components/background/Background"
import {useState} from "react"

// import './App.css';
import Home from './screens/home/Home';
import CreatePost from './screens/create/Create';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp';
import Edit from './screens/edit/Edit';
import MainNavBar from "./components/nav/MainNavBar"
import Footer from "./components/Footer/Footer"



function App() {

  const [ins, setIns] = useState(null);
 
  return (
    <div className="App">

      <Route exact path="/">
        <Home />
      </Route>
      {/* <Navbar/>
      <MainNavBar/>
      
      <Route exact path = "/">
      <Background/>
        <Home/>
      </Route>
      { !ins && 
      <div>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
<<<<<<< HEAD
      </Route> */}
      {/* <Route path="/edit-post">
        <Edit />
  </Route> */}
      <Route path="/create-post">
        <CreatePost />
      </Route> 
    </div>
  );
}

export default App;

