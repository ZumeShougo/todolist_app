import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();//デフォルトの動作をオミットしてる
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ])
    setInputText("");
  }

  const handleChange = (event) => {
      setInputText(event.target.value);
  }
  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputText}/>
        <button>
          <i class="plus square outline icon"></i>
        </button>
      </form>
    </div>
  )
}
