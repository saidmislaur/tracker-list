import React from 'react'
import axios from 'axios'
import '../Lists/lists.scss'

const DoneList = ({task, setTasks, remove}) => {
  const [checked, setChecked] = React.useState(true)

  const checkboxRef = React.useRef();
  
  const Check = (id) => {
    axios.patch(`http://localhost:5555/tasks/${id}`, {checked: false})
    setChecked(false)
    setTasks(prev => prev.map(task => (task._id === id ? { ...task, checked: false } : task)))
  }
  const done = task.filter(arr => arr.checked == true)
  return (
    <div className='lists lists--done'>
      <h2>Completed</h2>
      <ul>
        {done.map(item => (
          <li>
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

export default DoneList;
