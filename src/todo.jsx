import './App.css'
import { useEffect, useState } from 'react';
import Card from './card';
import {removeData ,readAllData} from './crud-ops';
import SimpleForm from './form';
function Todo(){
     const [prod,setProd]=useState([])
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [id,setId]=useState()
     const [render,setRender]= useState()
     const [editShow,setEditShow] = useState(false)
     const loadTodos = async()=>{
        const data= await readAllData()
        setProd(data)
     }
     const deleteTodo= async(todoId)=>{
         await removeData(todoId)
         setProd(prod.filter(todo=> todo.id !== todoId));
     }
     function editTodo(title,description,editId){
      setEditShow(true)
      setTitle(title)
      setDescription(description)
      console.log(editId)
      setId(editId)
    }
     useEffect(()=>{
        loadTodos()
     },[render])
     const filteredItems = async (status)=>{
      const data= await readAllData()
      const newItems = data.filter((val)=>val.status == status)
     setProd(newItems)
     }
     const mapAllItems = async ()=>{
      const data= await readAllData()
     setProd(data)
     }
return(
    <>
    <div className='from-field'>
      <SimpleForm 
          title={title}
          setTitle={setTitle} 
          description={description}
          setDescription={setDescription}
          id={id}
          render={render}
          setRender={setRender}
          editShow={editShow}
          setEditShow={setEditShow}
         />
      
      </div>
      <div style={{display:"flex",gap:"1rem"}}>
        <button className='cat-btn' onClick={mapAllItems} >All</button>
        <button className='cat-btn' onClick={()=>filteredItems("completed")}>Completed</button>
        <button className='cat-btn' onClick={()=>filteredItems("not completed")}>Not Completed</button>
      </div>
      
     <div className='all-cards'>
      {prod.map(product=>(
    <Card {...product} key={product.id} 
      deleteTodo={deleteTodo} 
      setTitle={setTitle} 
      setDescription={setDescription} 
      editTodo={editTodo}
      render={render}
      setRender={setRender}
      setEditShow={setEditShow}/>
   ))}</div>
   
    </>
)
}
export default Todo