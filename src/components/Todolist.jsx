import { useState } from "react";
export default function ToDoList(){
    const [tasks,setTask]=useState(["eat breakfast " , "take shower " ,"walk teh dog"]);
    const [newTask,setNewTask]=useState("");
    
    function handleInputChange(e){
setNewTask(e.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
        setTask  (t=>[...t,newTask]) ;
        setNewTask("");} 
    }

    function deleteTask(index){

        setTask(tasks.filter((_,i)=>i!==index))
        
        }
    function moveTaskUp( index){

if(index>0){
    const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
    setTask(updatedTask);

}
// [updatedTask[index],updatedTask[index+1]] = 
    }

    function moveTaskDown(index){

        if(index<tasks.length-1 ){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
            setTask(updatedTask);
           
        }
    }

    return (
    <div className="p-12 border-neutral-900">
        <h1 className="text-center my-5">TO-DO-LIST</h1>
        <div className="flex flex-wrap justify-center">
            <input 
                type="text" 
                 className="rounded m-2 text-black font-bold text-center"
                placeholder="enter a task"
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="font-bold p-2 ml-4 text-center border rounded addbutton"
                onClick={addTask}>
                     ADD
                </button>    
        </div>
        <div className="w-full flex flex-wrap justify-center ">
        <ol className="">
            {
            tasks.map((task,index)=>
            <li className="m-4 rounded p-4 bg-blue-400 " key={index}> <span className="text"> {task}</span>
                            <button 
                            className="deletebutton text-center p-1 bg-red-400 rounded text-red-900 ml-1 m-0" 
                            onClick={()=>deleteTask(index)}>
                                Delete
                                </button> 
                                
                                <button 
                            className="movebutton ml-1 m-0 p-1 bg-green-400 rounded text-green-900" 
                            onClick={()=>moveTaskUp(index)}>
                                Up
                                </button>
                                
                                <button 
                            className="movebutton p-1 bg-yellow-400 rounded text-green-900 ml-1 m-0" 
                            onClick={()=>moveTaskDown(index)}>
                                Down
                                </button>
                                </li>

            )}

        </ol>
        </div>

    </div>
     );
}