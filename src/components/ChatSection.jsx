import React, { useContext, useEffect, useState } from 'react'
import DarkMode from './DarkMode'
import { Send } from 'lucide-react'
import Headings from './Headings'
import Answer from './Answer'
import { ChatBotContext } from '../context/chatbotContext'

const ChatSection = () => {

  
  const {userPrompt, setUserPrompt , style , setStyle , hideShow , setHideShow , askQuestion ,response , setCopyUserPrompt , btn , setBtn , disableInput} = useContext(ChatBotContext)


  return (
    <div className={`bg-primary grow flex flex-col  text-center ${style && 'justify-evenly items-center'} sm:pr-10 pr-5 pl-30 sm:pl-10`}>

    {
      hideShow ? <Headings /> : <Answer />
    }

      <div className={`flex gap-x-4 items-center  max-w-[800px] w-full sm:flex-row flex-col gap-y-3 ${style ? "" : 'mt-auto mb-auto self-center'}`}>
        <div className='w-full'>
          <input type="text" disabled={disableInput} className={`bg-icon-bg text-icon-color w-full h-14 outline-none pl-4 rounded-3xl`} placeholder={`${disableInput ? "Open New Chat...!" : "Enter a Prompt..!"}`} onChange={(e) => {
            setUserPrompt(e.target.value)
            setCopyUserPrompt(e.target.value)
          }} value={userPrompt} />
        </div>
        <div className='flex items-center gap-x-4'>
          <div>
            <button className={`w-14 h-14 rounded-full bg-icon-bg text-icon-color flex justify-center items-center ${btn && 'hidden'}`} onClick={askQuestion} >
              <Send />
            </button>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection