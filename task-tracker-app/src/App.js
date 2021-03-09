import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import Footer from './components/Footer'
import About from './components/About'

//import React from 'react'

const App = ({title}) => {  
const [showAddTask, setShowAddTask] = useState(false)
  
const [tasks , setTasks] = useState([])

useEffect(() => {
  const getTasks =  async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
}, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  
//Delete Task
const deleteTask = async (id) =>{
  //Delete request from json
  await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

  console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = async (id) => {

  //Get data 
  const taskTotoggle = await fetchTask(id)
  console.log(taskTotoggle)

  const updateTask = {...taskTotoggle, reminder: !taskTotoggle.reminder }
  console.log(JSON.stringify(updateTask))

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updateTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) => 
      task.id === id ? {
        ...task, reminder : !data.reminder
      } : task
    )
  )
}

//fetch task from http localhost:5000

//Add Task
const addTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks`, {
    method: 'POST', headers: {'Content-type':'application/json',
  }, 
  body: JSON.stringify(task),
})

  const data = await res.json()

  setTasks([...tasks, data])
  
}

  return (
    <Router>
    <div className='container'>
      <Header title={"Add"} onAdd={() => setShowAddTask(!showAddTask)} colorIndicator={showAddTask ? "red" : "blue"} showAdd={showAddTask} />

      <Route path='/' exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask} />}

          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"}
        </>
      )} />
      
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  )
}

//Class Component
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;