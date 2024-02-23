// Using useState Hook from React, which let me
// keep the local function componenent
import { element } from "prop-types";
import React, { useState} from "react";

function TodoList() {
    // tasks will be the array of string
    // setTasks is the funciton for tasks
    // initial state of task will be empty array
    const [tasks, setTasks] = useState(["eat breaskfast","take shower"]);
    // initial state of newTask will be empty string
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        // access event parameter, target, value
        // so when we type in the textbox, it should
        // change. Otherwise, we can't type in the textbox
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

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
                            className="moveup-button"
                            onClick={() => moveTaskUp(index)}>
                            ⬆
                        </button>

                        <button
                            className="movedown-button"
                            onclick={() => moveTaskDown(index)}>
                            ⬇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList