"use client";

import { useEffect } from "react";

export default function DidAgent() {
  useEffect(() => {
    // Load the D-ID agent script manually
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://legal251resources.s3.ap-south-1.amazonaws.com/darshiniwappgo/index.js";

    // set attributes
    script.setAttribute("data-mode", "full");
    script.setAttribute(
      "data-client-key",
      "Z29vZ2xlLW9hdXRoMnwxMTUxMzAyMzUxNzQyOTk0NTQyODg6anFvcnV3dkFQVXVYTkhVclBZdExS"
    );
    script.setAttribute("data-agent-id", "v2_agt_2VQMVqT0");
    script.setAttribute("data-name", "did-agent");
    script.setAttribute("data-monitor", "true");
    script.setAttribute("data-target-id", "chatAi");

    document.body.appendChild(script);

    return () => {
      // clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full"
    style={{ height: "calc(100vh - 140px)" }}
    >
      <div
        id="chatAi"
        className="w-full h-full border border-gray-300"
        style={{ overflow: "hidden" }}
      />
    </div>

  );
}
