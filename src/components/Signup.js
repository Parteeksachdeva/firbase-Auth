import React,{useState} from 'react'
import "./Signup.css"
import Button from '@material-ui/core/Button';
import fire from '../fire';

function Signup() {
    const [user,setUser] = useState({});
    const [email,setEmail] = useState("");
    const[error,setError] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit=(e)=>{
        console.log(email);
        console.log(password);
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{setError(err.message)})
    }
    return (
        <div className="signup">
            <h1>SignUp</h1>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input  name="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label >Password</label>
                <input name="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                <label >Confirm Password</label>
                <input name="confirmPass"></input>
            </form>
            <Button onClick={onSubmit}>Signup</Button>
            {error? <p>{error}</p>:""}
        </div>
    )
}

export default Signup
