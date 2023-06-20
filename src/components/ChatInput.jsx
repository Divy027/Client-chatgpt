import React, { useState } from 'react'

export const ChatInput = ({sendMessage,loading}) => {

  const [value,setValue] = useState('')

  const handleSubmit = ()=> {
    if(value === "") return;
    sendMessage({sender: "user" ,message: value})
    setValue("");
  }
  
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-8 overflow-auto relative'> 
    {loading ? (
      <img src= "./loader.gif" className="w-8 m-auto"/>
    ): (
      <>
        <textarea 
        onKeyDown={(e)=> {
          //enter pressed     //shift+enter= newline
          e.keyCode ===13 && e.shiftKey ===false && handleSubmit();
        }}
        rows={1}
        className='border-0 bg-transparent outline-none w-11/12'
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />

        <img src='./send.png'
        onClick={handleSubmit}
        width={20} 
        alt='sendIcon'
        className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125'
        />
        </>
      )}
    </div>
  
  )
}
