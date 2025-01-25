import './App.css'
import AddTask from './components/AddTask'
import TaskCard from './components/TaskCard'

function App() {

  return (
    <div className='main-container'>
      <div className='header'>My ToDos</div>
      <div className="content-container">
        <AddTask />
        <TaskCard />
      </div>
    </div>
  )
}

export default App
