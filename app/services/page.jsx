"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion';

const services=[
    {
        num:'01',
        title:'MERN Stack Web Development',
        description:'Expert in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Delivering scalable, efficient, and modern web solutions tailored to your specific needs.'
    },
    {
        num:'02',
        title:'Full Stack Java Development',
        description:'Experienced in full stack development using Java, Spring Boot, and Hibernate. Proficient in building scalable backend RESTful APIs, and seamless front-end integration.',
    },

    {
        num:'03',
        title:'NextJS Web Development',
        description:'Specialized in creating high-performance, SEO-friendly web applications using Next.js. Leveraging server-side rendering and static site generation for optimal user experience and faster load times.'
    },
    {
        num:'04',
        title:'UI Development',
        description:'Crafting visually stunning and responsive websites using CSS, Tailwind CSS, and other modern design frameworks. Skilled in creating intuitive user interfaces that blend aesthetics with functionality for an optimal user experience.'
    },
    
    // {
    //     num:'05',
    //     title:'React Native Development',
    //     description:'Skilled in developing cross-platform mobile applications with React Native, specializing in Android app creation. Leveraging React principles to build efficient, native-like mobile experiences with a single codebase.',
    // }
    

]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className="container mx-auto">
            <motion.div
               initial={{opacity:0}}
               animate={{
                opacity:1,
                transition:{delay:1.4,duration:0.4,ease:"easeIn"},
               }}

               className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {services.map((service,index)=>{
                    return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover'>{service.num}</div>
                            <a  href='https://www.fiverr.com/s/BRmxd4d' 
  target='_blank' 
  rel='noopener noreferrer'  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                            <BsArrowDownRight className='text-primary text-3xl'/>
                            </a>
                        </div>
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                        <p className='text-white/60'>{service.description}</p>
                        <div className='border-b border-white/20 w-full'></div>
                    </div>
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Services
