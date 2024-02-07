import React from 'react'
import { Routes, Route, Form ,useNavigate,useParams} from "react-router-dom"
const Edit = () => {
    let {id}=useParams()
    console.log(id);
  return (
    <div>Form

        <h4> {id}</h4>

        <input    type='text' />
        <button> save</button>
    </div>
  )
}

export default Edit