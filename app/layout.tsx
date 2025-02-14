'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import Menu from "@/components/menu";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  useEffect(()=>{}, [pathname])
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);  return (
    <html lang="en">
      <head>
        
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Menu currentLink={currentPath}></Menu>
        {children}
      </body>
    </html>
  );
}
