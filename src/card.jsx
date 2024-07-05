import React, {useState } from 'react';
import './App.css';
import { editData } from './crud-ops';
const Card = ({title,description,status,deleteTodo,id,editTodo,render,setRender}) => {
      const[cardStatus,setCardStatus]=useState(status)
     const statusCompleted={
            status:"completed"
          }
      const statusNotCompleted={
        status:"not completed"
          }
async function handleCheck(){
 
  setCardStatus("completed")
  console.log(statusCompleted)
  await editData(statusCompleted,id)
  setRender(render+1)
}
 async function handleRemove(){
      setCardStatus("not completed")
      console.log(statusNotCompleted)
          await editData(statusNotCompleted,id)
          setRender(render+1)
      }

     return (
    <div className="card"> 
    <div className='title-checkbox'>
      {cardStatus==="completed" ? <i className="fa-regular fa-circle-check fa-xl" onClick={handleRemove} style={{color:"green"}}></i> : 
      <i className="fa-regular fa-circle fa-xl" onClick={handleCheck} style={{color:"grey"}}></i>}
      <h2 className="card-title">{title}</h2></div>
      <p className="card-description">{description}</p>
      <div className='btn-div'><button className='btn del' onClick={()=>deleteTodo(id)}>Delete</button>
      <button className='btn edit' onClick={()=>editTodo(title,description,id)}>Edit</button></div>
    </div>
  );
};


export default Card
