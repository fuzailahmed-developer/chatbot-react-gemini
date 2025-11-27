import { createContext, useState } from "react";

export const ChatBotContext = createContext()

export const ChatBotProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_GEMINI_URL
    const [userPrompt, setUserPrompt] = useState("")
    const [copyUserPrompt, setCopyUserPrompt] = useState("")
    const [style, setStyle] = useState(true)
    const [hideShow, setHideShow] = useState(true)
    const [response, setResponse] = useState('')
    const [recentChat, setRecentChat] = useState([])
    const [btn, setBtn] = useState(false)
    const [disableInput, setDisableInput] = useState(false)
    const [chatIndex,setChatIndex] = useState(-1);
    const [showRecent,SetShowRecent] = useState(false)
    const [animation,setAnimation] = useState(false)

    const payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": userPrompt
                    }
                ]
            }
        ]
    }

    const askQuestion = async () => {
        if (userPrompt.trim() == "") return;

        setStyle(false)
        setHideShow(false)
        SetShowRecent(false)
        setAnimation(true)

        const res = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(payload)
        })

        const data = await res.json()
        const botResponse = data.candidates[0].content.parts[0].text

        setResponse(botResponse)
        data && setAnimation(false)
        setBtn(true)

        setRecentChat(prev => [
            ...prev,
            {
                copyUserPrompt: userPrompt,
                response: botResponse
            }
        ])

        console.log(recentChat)

        setDisableInput(true)
        setUserPrompt("")
    }



    return (
        <ChatBotContext.Provider value={{recentChat, userPrompt, setUserPrompt, setCopyUserPrompt, copyUserPrompt, style, setStyle, hideShow, setHideShow, askQuestion, response, btn, setBtn, setDisableInput, disableInput , setChatIndex , chatIndex , SetShowRecent , showRecent , animation}}>
            {children}
        </ChatBotContext.Provider>
    )
}