"use client";

import {motion} from "framer-motion";
import React,{useState} from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight,BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects=[
  {
    num: "01",
    category:"Social It Up Clone",
    title:"Social It Up Clone",
    description:"Cloning the website of a marketing company, Social It Up With some Additional Features",
    stack:[{name:"NextJS"},{name:"Firebase"},{name:"Framer Motion"},{name:"Tailwind CSS"}],
    image:"/assets/work/social-it-up.png",
    live:"https://social-it-up.vercel.app/",
    github:"https://github.com/NC0312/social-it-up",
  },
  {
    num:"02",
    category:"Tripify",
    title:"Tripify",
    description:"AI-powered travel planner built with React.js, Firebase,Google Maps API and Gemini Recommendations",
    stack:[{name:"ReactJS"},{name:"Firebase"},{name:"Gemini/Google Maps API"}],
    image:"/assets/work/tripify.png",
    live:"https://tripify-web.vercel.app/",
    github:"https://github.com/NC0312/tripify-web-app"
  },
  {
    num:"03",
    category:"Tomato",
    title:"Tomato",
    description:"Food Delivery/Restaurant Website made using MERN Stack involving features like admin panel and payment gateway.",
    stack:[{name:"MERN Stack"},{name:"Stripe"}],
    image:'/assets/work/tomato.png',
    live:"https://tomato-food-frontend.onrender.com/",
    github:'https://github.com/NC0312/tomato-food-app'
  },
  {
    num:"04",
    category:"Textify",
    description:"Textify is a chat web application made using MERN Stack and Sockets making chat realtime.",
    stack:[{name:"MERN Stack"},{name:"Sockets"}],
    image:'/assets/work/textify.png',
    live:"https://textify-chat-app.onrender.com/",
    github:"https://github.com/NC0312/Textify",
  }
]

const Work = () => {
  const [project,setProject]=useState(projects[0]);
  const handleSlideChange=(swiper)=>{
    const currentIndex=swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1,transition:{delay:1.4,duration:0.4,ease:'easeIn'
      }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item,index)=>{
                return <li key={index} className="text-xl text-accent">{item.name}
                {index!==project.stack.length - 1 && ","}</li>
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent><p>Live project</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent><p>Github repo</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover rounded-lg"></Image>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
