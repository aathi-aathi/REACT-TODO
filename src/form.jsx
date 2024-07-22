import { createData, editTodoData } from './crud-ops';
import { useState } from 'react';
const SimpleForm = ({title,setTitle,description,setDescription,id,render,setRender,setEditShow,editShow}) => {
  const [errors, setErrors] = useState({});
  let formErrors = {};
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title) formErrors.title = 'Title is required';
      if (Object.keys(formErrors).length === 0) {
    createTodo({ title, description,status:"not completed"});
    setTitle('');
    setDescription('');
      }
      else {
        setErrors(formErrors);
      }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    if (!title) formErrors.title = 'Title is required';
    if (Object.keys(formErrors).length === 0) {
    editingTodo({title,description},id)
    setTitle('');
    setDescription('')
    } else {
      setErrors(formErrors);
    }
  };
 const createTodo = async (todoData)=>{
    await createData(todoData)
    setRender(render+1)
   }
   const editingTodo =async(editdata,id)=>{
    await editTodoData(editdata,id)
 
    setRender(render+1)
   }
  return (
    <form  className="form">
      <div className="form-group">
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          placeholder='Title'
          required
        />
        {errors.title && <p style={{ color: 'red',fontSize:'2vh',marginLeft:'5px' }}>{errors.title}</p>}
      </div>
      <div className="form-group">
        <input
          required
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          placeholder='Description'
          
        />
      </div>
       {!editShow && <button type="submit" className="form-button" onClick={handleAdd}>Add Todo</button>}
      {editShow && <div>
        <button type="submit" className="form-button" onClick={(e)=>handleEdit(e)}>Edit Todo</button>
        <button className="form-button" style={{marginLeft:"2px"}} onClick={()=>setEditShow(false)}>Cancel</button></div> }
    </form>
  );
};

export default SimpleForm;
