
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DidAgent from './DidAgent';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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
            chatEndRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', // or "end"
            });
        }, 0);
        return () => clearTimeout(timer);
    }, [messages]);


    return (
        <div className='w-full '>

            <p className='text-[24px] mb-2'>WhatsApp API will be Integrated</p>

            <button
                onClick={() => setIsOpen(true)}
                className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition absolute top-0 right-0">View Now</button>

            <div className="grid  grid-cols-8 bg-white font-sans "
                style={{ height: "calc(100vh - 300px)", width: '100%', marginTop: 40, justifyContent: 'center', display: 'flex', alignSelf: 'center' }}
            >
                {/* <div className="hidden lg:block col-span-8 flex items-center justify-center">
             <DidAgent />
             </div> */}
                {/* <div className="hidden lg:block col-span-4 flex items-center justify-center">
                <img
                    src="/assests/img/chat-bot-voice.png"
                    alt="Representative"
                    className="rounded-lg object-cover shadow-2xl w-full h-full"
                />
                <DidAgent />
            </div> */}

                <div className="col-span-8 lg:col-span-8 flex flex-col "
                    style={{ height: "calc(100vh - 300px)", width: '70%', marginTop: 40 }}>
                    <div className="flex-1 p-2 overflow-y-auto"

                    >
                        {messages.length === 0 ? (
                            <div className="flex flex-col h-full items-center justify-center text-center text-gray-400">
                                <Image
                                    src="/assests/img/darshini_logo.svg"
                                    alt="logo"
                                    width={121}
                                    height={58}
                                />
                                <p className="mt-4 text-lg">नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?</p>
                                <p className="text-sm">अपनी पूछताछ नीचे टाइप करके शुरू करें।</p>
                            </div>
                        ) : (
                            <div className="flex flex-col overflow-y-auto  gap-4 scrollbar-hide2"
                                style={{ height: "calc(100vh - 300px)" }}
                            >
                                {messages.map((message) => (
                                    <div key={message.id}>
                                        {message.sender === 'bot' ? (
                                            <div className="flex justify-start">
                                                <div className="flex flex-col items-start gap-1">
                                                    <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-blue-100 rounded-bl-none"
                                                        style={{
                                                            background: " linear-gradient(90deg, #DEFAFF 0%, #B0EFFF 100%)"
                                                        }}
                                                    >
                                                        <p className="text-sm text-start">{message.text}</p>
                                                    </div>
                                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                                                        <Image
                                                            src="/assests/img/darshini-logo-chat.svg"
                                                            alt="logo"
                                                            width={28}
                                                            height={28}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-end">
                                                <div className="flex flex-col items-end gap-1">
                                                    <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-[#EEE] text-gray-800 rounded-br-none">
                                                        <p className="text-sm">{message.text}</p>
                                                    </div>
                                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                                                        <Image
                                                            src="/assests/img/user-chat.svg"
                                                            alt="logo"
                                                            width={28}
                                                            height={28}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="flex flex-col items-start gap-1">
                                            <div className="max-w-xs p-3 rounded-2xl bg-blue-100 rounded-bl-none">
                                                <div className="flex items-center justify-center gap-1">
                                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-0"></span>
                                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                                                <Image
                                                    src="/assests/img/darshini-logo-chat.svg"
                                                    alt="logo"
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={chatEndRef} />
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className=' bg-[#FFF5F2] border border-[#FFC7B3] rounded-[12px] px-3 py-2'>
                            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="दर्शिनी आपकी कैसे मदद कर सकती है?"
                                    className="flex-1 w-full bg-transparent text-sm text-gray-700 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-[#DC4A17] text-white font-semibold rounded-[12px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:bg-orange-300"
                                    disabled={!inputValue.trim()}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#00000040] z-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] md:w-[400px] shadow-lg relative">
                        <h2 className="text-lg font-semibold mb-4 text-center">Whatsapp Preview</h2>

                        {/* Close button */}
                        <img
                            src="/assests/img/chat-box.png"
                            alt="Representative"
                            className="rounded-lg object-cover shadow-2xl w-full h-full"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;