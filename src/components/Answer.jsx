import React, { useContext, useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import robot from '../assets/robot.png'
import { Skeleton } from 'antd';
import { ChatBotContext } from '../context/chatbotContext'

const Answer = () => {

  const { response, copyUserPrompt, chatIndex, recentChat, setChatIndex, showRecent , animation , hideShow} = useContext(ChatBotContext)

  return (
    <>
      {
        showRecent ?
          <div className='text-start  flex flex-col gap-y-5 mt-8'>
            <div className='flex gap-x-5 items-center font-semibold'>
              <img src={profile} alt="img" className='w-10 h-10 bg-white rounded-full' />
              <h4 className='text-[17px] text-primary-text'>{recentChat[chatIndex]?.copyUserPrompt}</h4>
            </div>
            <div className='flex gap-x-5 mb-5 text-primary-text'>
              <img src={robot} alt="img" className='w-10 h-10' />
              <p>
                {recentChat[chatIndex]?.response}
              </p>
            </div>
          </div> :
          <div className='text-start  flex flex-col gap-y-5 mt-8'>
            <div className='flex gap-x-5 items-center font-semibold'>
              <img src={profile} alt="img" className='w-10 h-10 bg-white rounded-full' />
              <h4 className='text-[17px] text-primary-text'>{copyUserPrompt}</h4>
            </div>
            <div className='flex gap-x-5 mb-5 text-primary-text'>
              <img src={robot} alt="img" className='w-10 h-10' />
              {
                animation  ?
                 <Skeleton /> :
                  <p>{response}</p>
              }
            </div>
          </div>
      }
    </>
  )
}

export default Answer


