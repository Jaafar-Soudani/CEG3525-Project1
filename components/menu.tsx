import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type mainMenuItem  = {
    link : string;
    text : string;
}

export default function Menu({currentLink = ""}: {currentLink? : string }) {

    const mainMenuItems : mainMenuItem[] = [
        {link: "/", text: "Home"},
        {link: "/services", text: "Services"},
        {link: "/lawyers", text: "Lawyers"},
        {link: "/contact", text: "Contact us"},
        /*{link: "/book", text: "Book a Consultation"},*/
    ]

  return (
    <div className="flex justify-between w-full h-16 bg-dblue">
        <Link className='flex flex-row my-auto pl-3 py-1 max-h-full' href="/">
           <Image
            src="/logo.png"
            width="60"
            height="60"
            alt="logo"
           />
           <div className='ml-2 my-auto text-3xl text-gold font-extrabold'>
             Gee & Gee LLP
           </div>
        </Link>
        <div className='flex flex-row my-auto max-h-full gap-2 py-1'>
            {
                mainMenuItems.map((item : mainMenuItem) => {
                    let bgcol = ""
                    if(item.link === currentLink)
                       bgcol = "bg-lblue"
                    else
                        bgcol = "bg-mblue"
                    return (
                    <Link key={item.text} className={`flex justify-center text-center items-center text-white text-lg rounded rounded-lg ${bgcol} px-2 py-auto hover:bg-lblue`}
                        href={`${item.link}`}
                    >
                        {item.text}
                    </Link>
                    )
                })
            }
            <Link className={`flex justify-center text-center items-center text-white text-lg rounded rounded-lg bg-gold px-2 py-auto hover:bg-lblue max-w-40`}
                href="/book">
                        Book a Consultation
            </Link>
        </div>
        
    </div>
  )
}
