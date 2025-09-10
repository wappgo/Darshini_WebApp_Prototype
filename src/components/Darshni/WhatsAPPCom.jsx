import React from 'react';
import Image from 'next/image';
import Chatbot from './chatbot';

function WhatsAPPCom() {
    return (
        <div className="relative w-full flex items-center justify-center"
            style={{ height: "calc(100vh - 160px)" }}
        >
            <Chatbot />
            {/* <div>
                <p className='text-[24px] mb-2'>WhatsApp API will be Integrated</p>

                <Image
                    src="/assests/img/chat-box.png"
                    alt="logo"
                    width={450}
                    height={350}
                />
            </div> */}
        </div>
    );
}

export default WhatsAPPCom;
