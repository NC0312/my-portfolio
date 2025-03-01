import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { icons } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { DevToolsBlocker } from "@/utils/devToolsBlocker";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] , weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetBrainsMono'
});

export const metadata = {
  title: "Niket Chawla",
  description: "This is my portfolio website Niket Chawla made using NextJS.",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/> 
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
        {isProduction && <DevToolsBlocker />}
        </body>
    </html>
  );
}
