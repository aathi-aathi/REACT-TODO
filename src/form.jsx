import { createData, editTodoData } from './crud-ops';

const SimpleForm = ({title,setTitle,description,setDescription,id,render,setRender,setEditShow,editShow}) => {
  
  const handleAdd = (e) => {
    e.preventDefault();
    createTodo({ title, description,status:"not completed"});
    setTitle('');
    setDescription('');
  };
  const handleEdit = (e) => {
    e.preventDefault();
    editingTodo({title,description},id)
    setTitle('');
    setDescription('')
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
      </div>
      <div className="form-group">
        <input
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
