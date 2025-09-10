import React from 'react';
import Image from 'next/image';

function MobileCom() {
  return (
    <div className="relative w-full flex items-center justify-center"
      style={{ height: "calc(100vh - 210px)" }}
    >

      {/* <Image
        src="/assests/img/titanium-black.png"
        alt="logo"
        fill
        className="object-contain" 
      /> */}
      <div className="flex flex-col items-center">
        {/* <h2 className="text-lg font-semibold mb-2">Lost Item demo</h2> */}
        <video
          // src="/assests/img/lost_and_found_video.mp4"
          src="https://legal251resources.s3.ap-south-1.amazonaws.com/DarshiniDemoVideos/MobileAppVideo.mp4"
          controls
          className="rounded-lg shadow-md w-full md:w-[60%]"
        />

        <button 
         onClick={() => window.open(process.env.NEXT_PUBLIC_TRY_NOW_MOBILE_APP, "_blank")}
        className=" mt-3 px-3 w-32 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">Try Now</button>

      </div>
    </div>
  );
}

export default MobileCom;
