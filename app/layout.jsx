import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { icons } from "lucide-react";
// import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] , weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetBrainsMono'
});

export const metadata = {
  title: "Niket .",
  description: "This is my portfolio website made using NextJS.",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/> 
        {children}

        </body>
    </html>
  );
}
