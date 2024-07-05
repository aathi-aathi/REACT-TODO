
const API="https://666907ad2e964a6dfed39b95.mockapi.io/todo"  

const readAllData = async ()=>{
    const response = await fetch(API);
    const data= await response.json()
    return data
}
const createData = async (todoData)=>{
    const response = await fetch(API,{
        method:"POST",
        body:JSON.stringify(todoData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
    });
    const data= await response.json() 
    return data
}

async function editData(payload,id){
        const res= await fetch(`${API}/${id}`,{
            method:"PUT",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            }
        });
        const data = await res.json();
        console.log(data)
    
}
const removeData = async (id)=>{
    const response = await fetch(`${API}/${id}`,{
        method:"DELETE"
    })
    const data= await response.json()
    return data
}
async function editTodoData(payload,id){
    const res= await fetch(`${API}/${id}`,{
        method:"PUT",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    });
    const data = await res.json();
    console.log(data)

}
export {readAllData,removeData,createData,editData,editTodoData}