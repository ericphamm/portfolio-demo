import React from 'react';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default function Navbar({className}:{className?:string}) {
  const socials = [
  {
    Link: "https://github.com/ericphamm",
    Label: "Github",
    Icon: SiGithub,
  },
  {
    Link: "https://www.linkedin.com/in/ericthangpham",
    Label: "LinkedIn",
    Icon: SiLinkedin,
  },
  {
    Link: "https://www.youtube.com",
    Label: "Twitter",
    Icon: SiTwitter,
  },
];

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
       <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500'>Eric Pham</h1>
       <div className='flex items-center gap-5'>
        {socials.map((social,index)=>{
          const Icon  = social.Icon;
          return (
            <Link 
              href={social.Link} 
              key={index} 
              aria-label={social.Label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
          );
        })}
       </div>
    </nav>
  )

}
