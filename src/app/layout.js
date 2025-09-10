
import localFont from "next/font/local";
import "../../public/styles/global.css";
import AuthWrapper from "@/components/AuthWrapper";


const myFont = localFont({
  src: [
    {
      path: "../../public/assests/font/Cabin-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assests/font/Cabin-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assests/font/Cabin-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
  display: "swap",
});

export const metadata = {
  title: "Darshini AI | Your Smart Guide for Kumbh Mela",
  description:
    "Darshini AI is your intelligent companion for the Kumbh Mela, helping devotees and visitors with navigation, rituals, schedules, accommodations, and spiritual guidance for a seamless experience.",

  metadataBase: new URL("https://darshiniai.wappgo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Darshini AI | Smart Guide for Kumbh Mela",
    description:
      "Discover Darshini AI – your personalized Kumbh Mela guide offering navigation, ritual timings, accommodation info, and spiritual assistance for a truly divine journey.",
    url: "https://darshiniai.wappgo.com",
    type: "website",
    images: ["/assests/images/darshini-ai-logo.jpg"], // update with actual Darshini AI logo
  },

  icons: {
    icon: "/favicon.ico",
  },
};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        {/* <NavbarScroll /> */}
        <AuthWrapper>
        <main className="">{children}</main>
        </AuthWrapper>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8KBNNSN1RV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8KBNNSN1RV');
            `,
          }}
        />
        <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=19b87407"></script>
        
      </body>
    </html>
  );
}
