
'use client'; 
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DidAgent from './DidAgent';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const dummyBotResponses = [
        "आपकी शिकायत दर्ज कर ली गई है। हम जल्द ही आपसे संपर्क करेंगे।",
        "जानकारी देने के लिए धन्यवाद। हम इस मामले की जांच कर रहे हैं।",
        "ठीक है, मैं समझ गया। क्या आप कोई और जानकारी दे सकते हैं?",
        "धैर्य रखने के लिए धन्यवाद। कृपया लाइन पर बने रहें।",
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const isFirstUserMessage = messages.length === 0;

        const newUserMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
        };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        setInputValue('');

        setIsTyping(true);
        setTimeout(() => {
            let botResponseText;

            if (isFirstUserMessage) {
                botResponseText = 'सुनकर खेद है क्या आप मुझे घड़ी के बारे में विस्तार से बता सकते है, कब घूमी, कौन से कलर की है, कोनसा ब्रांड है ?';
            } else {
                botResponseText = dummyBotResponses[Math.floor(Math.random() * dummyBotResponses.length)];
            }

            const newBotMessage = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, newBotMessage]);
            setIsTyping(false);
        }, 1500);
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
        return () => clearTimeout(timer);
    }, [messages]); 


    return (
        <div className="grid grid-cols-8 bg-white font-sans"
            // style={{ height: "calc(100vh - 50px)" }}
        >
            <div className="lg:block col-span-8 flex items-center justify-center">
             <DidAgent />
             </div>
           
        </div>
    );
};

export default ChatInterface;