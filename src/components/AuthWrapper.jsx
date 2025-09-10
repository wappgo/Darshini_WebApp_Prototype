"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const publicPaths = [
    "/",
    "/sign-in",
    "/privacy-policy",
    "/cookie-policy",
    "/eula-policy",
    "/ai-safe-use-policy",
    "/terms-and-conditions",
    "/shipping-and-delivery",
    "/cancellation-and-refund-policy",
  ];

  const [canRender, setCanRender] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // read from localStorage (only client side)
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsUserLoggedIn(loggedIn);

    if (!loggedIn && !publicPaths.includes(pathname)) {
      router.replace("/");
    } else {
      setCanRender(true);
    }
  }, [pathname, router]);

  if (!canRender && !publicPaths.includes(pathname)) return null;

  const hideLayout = pathname === "/";

  return (
    <>
      {!hideLayout ? (
        <div className="flex flex-col min-h-screen">
          <div className="flex p-2 mobileviewdiv3">
            {/* <Sidebar /> */}
            <div className="w-full content-height">
              {/* <Navbar /> */}
              <main className="flex-1 chatdivcontainer">{children}</main>
            </div>
          </div>
        </div>
      ) : (
        <main>{children}</main>
      )}
      <div className="mobileviewdiv2">  
        {/* <MobileViewScreen /> */}
      </div>
    </>
  );
}
