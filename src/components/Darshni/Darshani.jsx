"use client";
import { useState } from "react";
import Image from "next/image";
import ChatInterface from "./ChatInterface";
import MobileCom from "./MobileCom";
import WhatsAPPCom from "./WhatsAPPCom";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Darshani() {
  const [activeTab, setActiveTab] = useState("kiosk");
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();


  const tabs = [
    { id: "kiosk", label: "KIOSK", inIcon: "/assests/img/kisosk-icon.svg", activeSrc: "/assests/img/kisosk-white-icon.svg" },
    { id: "web", label: "WEB", inIcon: "/assests/img/web-icon.svg", activeSrc: "/assests/img/web-white-icon.svg" },
    { id: "mobile", label: "MOBILE APP", inIcon: "/assests/img/mobile-icon.svg", activeSrc: "/assests/img/mobile-white-icon.svg" },
    { id: "whatsapp", label: "WHATSAPP & Chatbot", inIcon: "/assests/img/whatsapp-icon.svg", activeSrc: "/assests/img/whatsapp-white-icon.svg" },
    { id: "voice", label: "VOICE CALL", inIcon: "/assests/img/voice-icon.svg", activeSrc: "/assests/img/voice-white-icon.svg" },
  ];

  const tabsCase = [
    "Conversational Intelligence Demo : Hindi , Hinglish",
    "Usecase 1 Demo: Person Detection and Face Analyzer",
    "Usecase 2 Demo: Lost Item",
    "Usecase 3 Demo: Voice Call Demo",
  ];

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "false");
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col">
      {/* ---------------- Header Section (Logo + Tabs + Usecase tabs) ---------------- */}
      <div className="bg-white shadow-md">
        {/* Logo + Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
          {/* Logo + Mobile Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="block md:flex  items-center gap-2">
              <Image
                src="/assests/img/darshini_logo.svg"
                alt="logo"
                width={110}
                height={50}
              />
              <h4 className="text-[14px] md:text-[24px] text-black text-left">
                Presented by Wappgo
              </h4>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden ">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md bg-gray-100"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap items-center bg-gray-100 rounded-full px-2 py-1 gap-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all
                  ${activeTab === tab.id
                    ? "bg-orange-600 text-white shadow"
                    : "text-orange-600 hover:bg-orange-200"
                  }`}
              >
                <Image
                  src={activeTab === tab.id ? tab.activeSrc : tab.inIcon}
                  alt={tab.label}
                  width={16}
                  height={16}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden mt-3 flex flex-col bg-gray-100 rounded-lg p-3 gap-2  absolute right-[10px] top-[11%] z-50 w-[70%]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeTab === tab.id
                      ? "bg-orange-600 text-white shadow"
                      : "text-orange-600 hover:bg-orange-200"
                    }`}
                >
                  <Image
                    src={activeTab === tab.id ? tab.activeSrc : tab.inIcon}
                    alt={tab.label}
                    width={16}
                    height={16}
                  />
                  {tab.label}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className=" px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Use Case Tabs */}
        <div className="w-full py-2 px-2 bg-white font-sans flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {(activeTab === "whatsapp" || activeTab === "mobile" || activeTab === "voice") ? <></> : (
              tabsCase.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-in-out
                  ${activeCase === index
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                    }`}
                >
                  {tab}
                </button>
              ))

            )}

          </div>

          <button
            onClick={handleLogout}
            className="hidden md:flex px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ---------------- Scrollable Content ---------------- */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full text-center">
          {(activeTab === "kiosk" || activeTab === "web") && (
            <>
              {activeCase === 0 && <ChatInterface />}
              {activeCase === 1 && (
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2">Face Analyzer Demo</h2>
                  <video
                    // src="/assests/img/age_detection.mp4"
                    src="https://legal251resources.s3.ap-south-1.amazonaws.com/DarshiniDemoVideos/PersonDetectionAndFaceAnalyzer.mov"
                    controls
                    className="rounded-lg shadow-md w-full md:w-[60%]"
                  />
                  <button 
                   onClick={() => window.open(process.env.NEXT_PUBLIC_TRY_NOW_FACE_ANALYZER, "_blank")}
                  className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">Try Now</button>
               
                </div>
              )}
              {activeCase === 2 && (
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2">Lost Item demo</h2>
                  <video
                    // src="/assests/img/lost_and_found_video.mp4"
                    src="https://legal251resources.s3.ap-south-1.amazonaws.com/DarshiniDemoVideos/lost_and_found_demo_video.mp4"
                    controls
                    className="rounded-lg shadow-md w-full md:w-[60%]"
                  />

                   <button 
                   onClick={() => window.open(process.env.NEXT_PUBLIC_TRY_NOW_LOST_ITEM, "_blank")}
                  className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">Try Now</button>
               
                </div>
              )}
              {activeCase === 3 && (
               <div className="flex flex-col md:flex-row items-center">
  <div className="flex flex-col items-center mt-3">
    <h2 className="text-lg font-semibold mb-2 text-center mb-4">
      Voice English demo
    </h2>
    <video
      src="/assests/img/vocie_assistance_for_darsini.mp4"
      controls
      className="rounded-lg shadow-md w-full md:w-[90%]"
    />
    <button
      onClick={() =>
        window.open(process.env.NEXT_PUBLIC_TRY_NOW_VC_ENG, "_blank")
      }
      className="mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
    >
      Try Now
    </button>
  </div>

  <div className="flex flex-col items-center mt-3 md:ml-6">
    <h2 className="text-lg font-semibold mb-2 text-center mb-4">
      Voice Hindi demo
    </h2>
    <video
      // src="/assests/img/vocie_assistance_for_darsini.mp4"
           src="https://legal251resources.s3.ap-south-1.amazonaws.com/DarshiniDemoVideos/MobileAppVideo.mp4"
      controls
      className="rounded-lg shadow-md w-full md:w-[90%]"
    />
    <button
      onClick={() =>
        window.open(process.env.NEXT_PUBLIC_TRY_NOW_VC_HINDI, "_blank")
      }
      className="mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
    >
      Try Now
    </button>
  </div>
</div>

              )}
            </>
          )}

          {activeTab === "web" && <ChatInterface />}
          {activeTab === "mobile" && <MobileCom />}
          {activeTab === "whatsapp" && <WhatsAPPCom />}
          {activeTab === "voice" && (
            // <div className="flex flex-col items-center">
            //   <p className="text-gray-700 mb-2">Voice Call services content</p>
            //   <video
            //     src="/assests/img/vocie_assistance_for_darsini.mp4"
            //     controls
            //     className="rounded-lg shadow-md w-full md:w-[60%]"
            //   />
            // </div>
          <div className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center mt-3">
                <h2 className="text-lg font-semibold mb-2 text-center mb-4">
                  Voice English demo
                </h2>
                <video
                  src="/assests/img/vocie_assistance_for_darsini.mp4"
                  controls
                  className="rounded-lg shadow-md w-full md:w-[90%]"
                />
                <button
                  onClick={() => window.open(process.env.NEXT_PUBLIC_TRY_NOW_VC_ENG, "_blank")}

                  className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">Try Now</button>
              </div>
              <div className="flex flex-col items-center mt-3">
                <h2 className="text-lg font-semibold mb-2 text-center mb-4">
                  Voice Hindi demo
                </h2>
                <video
                  // src="/assests/img/vocie_assistance_for_darsini.mp4"
                  src="https://legal251resources.s3.ap-south-1.amazonaws.com/DarshiniDemoVideos/MobileAppVideo.mp4"
                  controls
                  className="rounded-lg shadow-md w-full md:w-[90%] "
                />
                <button
                  onClick={() => window.open(process.env.NEXT_PUBLIC_TRY_NOW_VC_HINDI, "_blank")}

                  className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">Try Now</button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
