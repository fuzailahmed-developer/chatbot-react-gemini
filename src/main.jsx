import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChatBotProvider } from './context/chatbotContext.jsx'


createRoot(document.getElementById('root')).render(
        <ChatBotProvider>
                <App />
        </ChatBotProvider>
)
