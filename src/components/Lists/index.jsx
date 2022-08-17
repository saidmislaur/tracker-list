import React from 'react'
import axios from 'axios'
import './lists.scss'


const Lists = ({task, setTasks, remove}) => {
  const [checked, setChecked] = React.useState(true)
  const checkboxRef = React.useRef();
  
  const tasks = task.filter(arr => arr.checked !== true)

  const Check = (id) => {
    axios.patch(`http://localhost:5555/tasks/${id}`, {checked: true})
    // setChecked(false)
    setTasks(prev => prev.map(task => (task._id === id ? { ...task, checked: true } : task)))
  }

  
  
  return (
    <div className='lists'>
      <ul>
        {tasks.map((item, i) => (
            <li key={i}>
              <div className="lists_text">
              <label className="label">
                <input ref={checkboxRef} type="checkbox" id="scales" name="scales" />
                  <span style={{}}
                    onClick={() => Check(item._id)}
                    className={item.checked == checked ? `checkmark checkmark--bg` : "checkmark"}></span>
                </label>
                {item.text}
              </div>
              <img onClick={() => remove(item._id)} className="lists_deleteSvg" src="./delete.svg" />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Lists
