import React, { useContext, useState } from 'react'
import { Menu } from 'lucide-react'
import { Plus } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import { ChatBotContext } from '../context/chatbotContext'

const Sidebar = () => {

    const [extent, setExtent] = useState(false)
    const { setStyle, setHideShow, recentChat, setBtn, setDisableInput, setChatIndex, SetShowRecent } = useContext(ChatBotContext)

    const handleNewLayout = () => {
        setHideShow(true)
        setStyle(true)
        setBtn(false)
        setDisableInput(false)
    }


    return (
        <>
            {
                extent ?
                    <div className='min-h-screen w-50  bg-primary text-primary-text transition-all duration-300 border-r border-primary-text absolute top-0 left-0 sm:static'>
                        <div className='flex flex-col w-full gap-y-8 pt-8 px-4'>
                            <Menu onClick={() => setExtent(!extent)} />
                            <div className='bg-light-white rounded-full p-4 text-primary-text flex items-center gap-x-2 hover:bg-hover-bg cursor-pointer' onClick={handleNewLayout}>
                                <Plus />
                                <p>New Chat</p>
                            </div>
                            {
                                recentChat?.length > 0 ?
                                    recentChat.map((chat, i) => (
                                        <div className='bg-light-white rounded-full p-4 text-primary-text flex items-center gap-x-2 hover:bg-hover-bg cursor-pointer' key={i} onClick={() => {
                                            setChatIndex(i)
                                            SetShowRecent(true)
                                            setHideShow(false) 
                                            setStyle(false)
                                        }}>
                                            <div>
                                                <MessageCircle className='w-6 h-6' />
                                            </div>
                                            <p className='whitespace-nowrap overflow-hidden text-sm'>{chat.copyUserPrompt}</p>
                                        </div>
                                    )) :
                                    <div className='bg-light-white rounded-full p-4 text-primary-text flex items-center gap-x-2 hover:bg-hover-bg cursor-pointer'>
                                        <MessageCircle />
                                        <p className='whitespace-nowrap overflow-hidden text-sm'>No Recent Chat</p>
                                    </div>
                            }
                        </div>
                    </div> :

                    <div className='min-h-screen  w-25 bg-primary text-primary-text transition-all duration-300 border-r border-primary-text absolute top-0 left-0 sm:static'>
                        <div className='flex flex-col w-full gap-y-8 pt-8 px-4 items-center'>
                            <Menu onClick={() => setExtent(!extent)} className='cursor-pointer' />
                            <div className='bg-light-white rounded-full p-4 text-primary-text flex items-center gap-x-2 hover:bg-hover-bg cursor-pointer' >
                                <Plus />
                            </div>
                            <div className='bg-light-white rounded-full p-4 text-primary-text flex items-center gap-x-2 hover:bg-hover-bg cursor-pointer'>
                                <MessageCircle />
                            </div>
                        </div>
                    </div>

            }

        </>
    )
}

export default Sidebar

