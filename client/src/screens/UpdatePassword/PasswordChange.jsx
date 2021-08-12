import React from 'react'
import {useState} from "react"
import {useHistory} from "react-router"
import {updatePassword} from "../../services/user"
import Layout from "../../components/Layout/Layout"




export default function PasswordChange(props) {
    const [input, setInput] = useState({username: "", password: ""})
     const {setUser, user} = props;
      const history = useHistory();

    const handleSubmit = async(error) =>{
        error.preventDefault();
        const userData = await updatePassword(user.id, input)
        setUser(userData);
        history.push("/sign-in")
    }

    const handleInput = (e) => {
        const {id, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value
        }))
    };
console.log(props)

    return (
        <Layout>
      <div className="logo">
        <h1>Forumtopia</h1>
      </div>
      <div className = "back">
      </div>
      <div>
        Change Password
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          id="username"
          value={input.username}
          type="text"
          onChange={handleInput} />
        <br />
        <label>Password:</label>
        <input
          id="password"
          value={input.password}
          type="password"
          onChange={handleInput} 
          />
        <br />
        <button>Change Password</button>
      </form>
    </Layout>
    )
}
