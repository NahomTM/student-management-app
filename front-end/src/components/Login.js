import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState} from'react';
import axios from 'axios';


function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState("");
    const[signInAs,setSignInAs]=useState("");
    const[remember,setRemember]=useState(0);
    const[username,setUsername]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`your email is ${email}`);
        axios.post('http://localhost:8081/login',{email,password})
        .then(res=>console.log(res))
        .catch(err=> console.log(err));

    }
return(
   <div>
        <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input id="username" type="text" name="username" value={username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/><br/> 
        <label for="email">Email:</label>
        <input id="email" type ="email" placeholder="youremail@ojnc.com" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} required/>
        <br/>
        <label for="pass">Password:</label>
        <input id="pass" type="password" placeholder="*******" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} required/>
        <br/>
        <label for="sign-in-as">Sign in as:</label>
        <select onChange={(e)=>{setSignInAs(e.target.value) }} value={signInAs} name="signInAs" >
            {/* Error needs to be handled */}
            <option selected= "selected">Sign in as an Admin</option>
            <option>Sign in as an Manager</option>
            <option>Sign in as an Accountant</option>
            <option>Sign in as an Instructor</option>
        </select>
        <br/>
        <button type="submit" className="">Sign in</button><br/>
        <input type="checkbox" id="remember" value={remember} name="remember" onChange={(e)=>setRemember(e.target.value)}/>
        <label for="remember">Remember me</label>
        
        <a href="">Forgot password</a>


    </form>
   </div>
    
  )
}
export default Login;