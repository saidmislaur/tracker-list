import React from 'react';
import axios from 'axios';
import './header.scss'

const Header = ({tasks, setTasks}) => {
  const [value, setValue] = React.useState('')

  const task = {
    text: value,
    checked: false
  }

  const onKeyPressHandler = e => {
    try {
      if(e.key === 'Enter' && value === '') {
        return alert('введите текст')
      }

      if (e.key === 'Enter') {
        axios.post(
          'http://localhost:5555/tasks',
          task
        )
        setTasks([...tasks, task])
        setValue('')
      }
    } catch (error) {
      alert('введите текст')
      console.log(error)
    }
    
  };

  
  return (
    <header className="header">
      <input 
        type="text"
        value={value}
        placeholder='Add new task'
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onKeyPressHandler} 
      />
    </header>
  )
}

export default Header
