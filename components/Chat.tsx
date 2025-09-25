'use client'

import { useState } from "react"
import Input from "./ui/Input"

export default function Chat() {
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState([
        {
            type: 'user',
            message: 'Hey my name is Franco! How are you?',
        },
        {
            type: 'bot',
            message: 'Hi, Franco. I\'m doing well',
        },
    ])

    return (
        <div className="mx-auto mt-5 flex flex-col h-[80vh] bg-[#1d1c20] border border-[#3e3e3e] rounded-lg w-1/2 px-4 py-6 relative gap-4">
            {messages.map((message, index) => (
                <div 
                    key={index}
                    className={`text-white px-3 py-2 rounded-lg ${message.type === 'user' ? 'bg-[#6366e9] self-end' : 'bg-[#131718] self-start'}`}
                >
                    {message.message}
                </div>
            ))}

            <Input 
            id="chat-input"
            type="text" 
            placeholder="Ask chat.bot anything"
            className="absolute left-0 right-0 bottom-4 mx-auto w-[95%]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}