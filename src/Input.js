import React,{useState} from 'react'
const Input = () => {
    let [input,SetInput]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
   
    let fun1=(e)=>{
        let {name,value}=e.target
        // console.log(e.target.name,"rrrr");
        SetInput({...input,[name]:value})
        console.log(input);
    
    }
  return (
    <div> 
         <input   onChange={fun1}    name='firstName'   value={input.firstName}   type='text' placeholder='Enter your firstname'/>
         <input    onChange={fun1}   name='lastName' value={input.lastName}    type='text' placeholder='Enter your lastname'/>
         <input    onChange={fun1}   name='email' value={input.email}    type='text' placeholder='Enter your email'/>


    </div>
  )
}

export default Input