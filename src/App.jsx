import React, { useEffect} from 'react';
import DoneList from './components/DoneList';
import Header from './components/Header'
import Lists from './components/Lists'
import axios from 'axios';
import './styles/App.scss';

function App() {
  const [tasks, setTasks] = React.useState([])

  useEffect(() => {
    axios.get('http://localhost:5555/tasks')
    .then(res => {
        setTasks(res.data)
    })
  }, [])


  const remove = async (id) => {
    await axios.delete(`http://localhost:5555/tasks/${id}`)
    setTasks((prev) => prev.filter((item) => item._id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <Header tasks={tasks} setTasks={setTasks}/>
        <div className="content">
          <Lists remove={(i) => remove(i)} task={tasks} setTasks={setTasks}/>
          <DoneList task={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
