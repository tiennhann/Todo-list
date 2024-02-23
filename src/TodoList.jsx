// Using useState Hook from React, which let me
// keep the local function componenent
import { element } from "prop-types";
import React, { useState} from "react";

function TodoList() {
    // tasks will be the array of string
    // setTasks is the funciton for tasks
    // initial state of task will be empty array
    const [tasks, setTasks] = useState([]);
    // initial state of newTask will be empty string
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        // access event parameter, target, value
        // so when we type in the textbox, it should
        // change. Otherwise, we can't type in the textbox
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index +1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    // call back to the funciton
                    onChange={handleInputChange}
                /> 
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
       

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            ⬆
                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            ⬇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList