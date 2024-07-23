import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaInstagram, } from 'react-icons/fa';

const socials=[
    {icon:<FaGithub/> , path:"https://github.com/NC0312"},
    {icon:<FaLinkedinIn/> , path:"https://www.linkedin.com/in/Niket-Chawla/"},
    {icon:<FaInstagram/> , path:"https://www.instagram.com/oyee__nikooo__/"},
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social
