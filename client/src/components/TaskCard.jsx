import { useEffect, useState } from "react";
import axios from "axios";
import './tasklist.css'

export default function TaskCard() {

    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetchTodos();
    }, []);
    async function fetchTodos(){
        try {
            const response = await axios.get('http://localhost:4001');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    async function handleDelete(_id) {
        try {
            await axios.delete(`http://localhost:4001/${_id}`);
            alert("Todo item deleted successfull")
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
    
    return (
        // <div className="all-tasks"> 
        //     <ul>
        //         {todos.map((todo) => (<>
        //             <li key={todo._id}>{todo.name}</li>
        //             <button onClick={() => handleDelete(todo._id)}>Delete</button>
        //         </>)
        //         )}
        //     </ul>
        // </div>
        <div className="all-tasks">
    <ul>
        {todos.map((todo) => (
            <li key={todo._id}>
                <span className="task-text">{todo.name}</span> {/* Added span here */}
                <button onClick={() => handleDelete(todo._id)}>Delete</button>
            </li>
        ))}
    </ul>
</div>
    )
}