"use client";

import { FaReact, FaNodeJs, FaDatabase, FaJava, FaJs, FaCss3, FaHtml5, FaDocker, FaGit, FaFigma, FaAws, FaStripe } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiHibernate, SiSpring, SiMongodb, SiMysql } from 'react-icons/si';


const about = {
  title: "About me",
  description:
    "Software Engineering Intern at Twinline Business Solutions | Java Developer | MERN Stack & Next.js Enthusiast",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Niket Chawla",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 77194 17720",
    },
    {
      fieldName: "Experience",
      fieldValue: "3-4 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "contactniketchawla@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "https://www.linkedin.com/in/Niket-Chawla/",
    },
    {
      fieldName: "Github",
      fieldValue: "https://github.com/NC0312"
    }
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Showcasing my journey through diverse development roles',

  items: [
    {
      company: 'Twinline Business Solutions',
      position: 'Java Software Developer',
      duration: 'Aug 2024 - Present',
      location: 'Gurugram,Haryana',
      logo: '/assets/company1.png',
      linkedin: 'https://www.linkedin.com/company/twinline-business-solutions/'
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "Chitkara University",
      position: "BTech-CSE",
      cgpa: "CGPA - 9.50",
      duration: '2020-2024',
      logo: 'assets/chitkara.jpeg',
      linkedin: 'https://www.linkedin.com/school/chitkara-university/',
      location: 'Rajpura,Punjab'
    },
    {
      institution: "R.S.D Raj Rattan Public School",
      position: "Senior-Secondary",
      cgpa: "Percentage - 81.8%",
      duration: '2020',
      logo: 'assets/rsd.png',
      linkedin: 'https://www.facebook.com/profile.php?id=100006535662878&mibextid=ZbWKwL',
      location: 'Ferozepur City,Punjab'
    }, {
      institution: "DCM International School",
      position: "Secondary",
      cgpa: "Percentage - 79.8%",
      duration: '2018',
      logo: 'assets/dcm.webp',
      linkedin: 'https://www.linkedin.com/school/thedcmgroupofschools/',
      location: 'Ferozepur City,Punjab'
    }
  ]
}

const skills = {
  title: "My Skills",
  sections: [
    {
      title: "Backend",
      skillList: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpring />, name: "Spring Boot" },
        { icon: <SiHibernate />, name: "Hibernate" },
        { icon: <FaNodeJs />, name: "Node JS" },
      ],
    },
    {
      title: "Frontend/UI",
      skillList: [
        { icon: <FaReact />, name: "React JS" },
        { icon: <SiNextdotjs />, name: "Next JS" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaJs />, name: "JavaScript" },
      ],
    },

    {
      title: "Database & Cloud",
      skillList: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaAws />, name: "AWS" },
      ],
    },
  ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';


const calculateTenure = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now - start);
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));

  if (diffMonths >= 12) {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    if (months === 0) {
      return years === 1 ? '1 yr' : `${years} yrs`;
    }
    return years === 1
      ? `1 yr ${months} ${months === 1 ? 'mo' : 'mos'}`
      : `${years} yrs ${months} ${months === 1 ? 'mo' : 'mos'}`;
  } else {
    return diffMonths === 1 ? '1 mo' : `${diffMonths} mos`;
  }
};

const Resume = () => {
  return (

    //  Side menu code ==== START
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[88vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Side menu code =====END  */}



          {/* Experience TAB =====START */}
          <div className='min-h-[70vh] w-full'>

            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      const [startDate] = item.duration.split(' - ');
                      const tenure = calculateTenure(startDate);
                      return (
                        <li key={index} className='relative bg-[#232329] h-[184px] w-[450px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration} · {tenure}</span>
                          <h3 className='text-xl min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                          <p className='text-white/40 text-sm ml-[18px]'>{item.location}</p>
                          <img src={item.logo} alt={`${item.company} logo`} className='absolute bottom-5 right-10 w-[50px] h-[50px] object-contain border-[2px]' />
                          <div className='absolute top-5 right-5 group'>
                            <a href={item.linkedin}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                              <BsArrowDownRight className='text-primary text-xl' />
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Experience TAB ===== END */}


            {/* Education TAB =====START */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='relative bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          {/* Position and duration */}
                          <span className='text-accent mt-3'>
                            {item.position} <span>({item.duration})</span>
                          </span>
                          {/* Institution */}
                          <h3 className='text-xl max-w-[260px] min-h-[60px] font-bold text-center lg:text-left mt-1'>
                            {item.institution}
                          </h3>
                          {/* Location (directly under institution) */}
                          <p className='text-sm text-white/50 mt-1 mb-2'>
                            {item.location}
                          </p>
                          {/* CGPA */}
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent mb-2'></span>
                            <p className='text-white/60 mb-2'>{item.cgpa}</p>
                          </div>
                          {/* Logo (conditionally rendered) */}
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              className='absolute bottom-5 right-5 w-[50px] h-[50px] object-contain rounded-[8px]'
                            />
                          )}
                          <div className='absolute top-5 right-5 group'>
                            <a href={item.linkedin || '#'}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                              <BsArrowDownRight className='text-primary text-xl' />
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Eduction TAB =====END */}


            {/* Skills TAB =====START */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                </div>

                {skills.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mt-7">
                    <h4 className="text-2xl font-semibold mb-5">{section.title}</h4>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]'>
                      {section.skillList.map((skill, skillIndex) => (
                        <li key={skillIndex}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* Skills TAB =====END */}


            {/* About TAB =====START */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
       {/* About TAB =====END */}

    </motion.div>
  )
}

export default Resume
