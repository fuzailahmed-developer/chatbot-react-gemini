import React from 'react'
import Sidebar from './components/Sidebar'
import Separation from './components/Separation'
import ChatSection from './components/ChatSection'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Separation />
      <ChatSection />
    </div>
  )
}

export default App