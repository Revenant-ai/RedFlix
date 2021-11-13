import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const RegisterScreen = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const registerHandler = (e) => {
        e.preventDefault()

        const config={
            headers:{
                "Content-Type":"application/json"
        }
    }
    
        if(password !== confirmpassword){
            setError("Password and Confirm Password do not match")
            return
        }
        const body = {
            username:username,
            email:email,
            password:password
        }




    return(
    <div className="register-screen">
        <form onSubmit={registerHandler} className="register-form">
            <h3>
                Register
            </h3>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" required id="username" placeholder="Username" value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>


            <div className="form-group">
                <label htmlFor="username">Email:</label>
                <input type="email" required id="email" placeholder="Enter email" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" required id="password" placeholder="Enter Password" value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type="password" required id="confirmPassword" placeholder="Confirm Password" value={confirmpassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
        
        <span>Already have an account?<Link to="/login">Login</Link></span>
        </form>
    </div>
    )
}

export default RegisterScreen