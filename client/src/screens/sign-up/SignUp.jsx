//import React from 'react'
//import {signUp} from "../../services/sign-in/Sign-up"
import {useState} from "react"
//import Layout from "../../components/Layout/Layout"
import {useHistory} from "react-router-dom"
import "./SignUp.css"

export default function SignUp() {
    const [input, setInput] = useState({username: "", email: "", password: ""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const user = await signUp(input)
        //setUser(user);
        history.push("/")
    };

    const handleInput = (e) => {
        const {id, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }));
    }
    return (
        <div>
            <div className="logo">
                <h1>Forumtopia</h1>
               
            </div>
            <div className = "back">

            </div>
            {/* <Layout> */}
                <form className="move" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <br/>
                    <input id="username" 
                    type="text" 
                    value={input.username}
                     onChange={handleInput}
                     /> 
                     <br/>
                     <label>Email</label>
                     <br/>
                     <input
                     id="email"
                     type="email"
                     value={input.email}
                     onChange={handleInput}
                     />
                     <label>Password</label>
                     <input 
                     id="password"
                     type="password"
                     value={input.password}
                     onChange={handleInput}
                     />
                     <br/>
                     <button>Sign Up</button>
                </form>
            {/* </Layout> */}
        </div>
    )
}
