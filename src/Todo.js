import React, { useEffect, useState } from 'react'
import { Routes, Route, Form ,useNavigate} from "react-router-dom"

const Todo = () => {

    let navigate=useNavigate()
    // localStorage.setItem("lastname", "Smith");
    //  let save=    localStorage.getItem("lastname");




    const [input,SetInput]=useState()
    const [data,SetData]=useState([])
   


    // useEffect(()=>{
    //     let newData=   JSON.stringify(data)
    //     localStorage.setItem('item',newData)

    // },[])


     const fun2=()=>{
        SetData([...data,input])
        console.log(data,"data");
        SetInput('')
        let newData=   JSON.stringify(data)
        localStorage.setItem('todo',newData)
    

     

     }

    let fun1=(e)=>{
        SetInput(e.target.value)
        console.log(input);
    }


    let edit=(id)=>{
        navigate(`/edit/${id}`)

    }


    let delet=(id)=>{
        // console.log(id);

      let newA= data.filter((value,index)=>{
            return index!==id

        })
        SetData(newA)

    }
  return (
    <div>
        <h1> TODO</h1>
     
        <input type='text'   onChange={fun1}  name='input'   value={input}  placeholder='Enter your todo'/>
        <button   onClick={fun2}> add</button>
      
              {
                data.map((value,index)=>{
                    console.log(index);
                    return(<>
                    <li   >   {value}</li>
                    <button   onClick={()=>delet(index)}> delet</button>
                    <button   onClick={()=>edit(index)}> Edit</button>

                    </>)

                })
              }
      
    </div>
  )
}

export default Todo