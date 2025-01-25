import axios from "axios";
import { useState } from "react"
import './addtask.css'

export default function AddTask() {

    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    async function handleSumbmit(e){
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4001/", { name: newTodo });
            setTodo([...todo, response.data]);
            setNewTodo('');
            alert("Todo item added successfull")
            window.location.reload();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    return (
        <div className="add-task">
            <form onSubmit={handleSumbmit} method="post">
                <input 
                    onChange={(e)=>setNewTodo(e.target.value)} 
                    type="text" 
                    name="" id="" 
                    value={newTodo} />
                <button className="add-btn" type="submit">Add</button>
            </form>
        </div>
    )
}
