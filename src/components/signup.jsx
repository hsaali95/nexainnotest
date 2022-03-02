import React, { useState } from 'react'
import '../style.css'
import { auth, createUserWithEmailAndPassword } from "firebase/auth";

 const Signup = () => {
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const submitHandler = (e)=>{
        e.preventDefault()
        console.log("this is email",email)
        console.log("This is password" , password)
        // createUserWithEmailAndPassword(auth,email,password)
        // .then((result)=>{
        //     console.log(result)
        //     console.log(result.uid)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
     }
     const addData = ()=>{
        console.log("working")
     }
  return (
    <div className="subdiv">
        <div className='divofloginform'>
            <div className='pictextdiv'>
                <p>Connect, share <br/>and react with<br/>people in your life</p>
                <div className='divofsignform'>
                    
                    <form  onSubmit={submitHandler} className='formcontainer'>
                    <h3 >Creat a new Account</h3>
                    {/* <input type="text" placeholder='Your name' /> */}
                    <input 
                    type="email" 
                    placeholder='Your email/phone'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <input 
                    type="password" placeholder='Password' 
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br/>
                
                   <div>
                   <label>Gender</label> <br/>
                    <input type="radio" placeholder='' />
                    <label>Male</label>
                    <input type="radio" placeholder='' />
                    <label>Female</label>
                    <input type="radio" placeholder='' />
                    <label>I do not prefer</label>
                    <br/>
                   </div>
                    <button onClick={addData}> Sign up</button>
                    </form>
                    

                </div>
               
            </div>
        </div>
    </div>
  )
}
export default Signup;
