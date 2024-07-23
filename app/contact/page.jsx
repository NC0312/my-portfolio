// "use client";
// import {Button} from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import emailjs from '@emailjs/browser';
// import { Select, SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select';

// import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';

// const info=[
//   {
//     icon:<FaPhoneAlt/>,
//     title:'Phone',
//     description:'(+91) 77194-17720',
//   },
//   {
//     icon:<FaEnvelope/>,
//     title:'Email',
//     description:'contactniketchawla@gmail.com',
//   },
//   {
//     icon:<FaMapMarkerAlt/>,
//     title:'Address',
//     description:'#35, Bedi Green Avenue, Ferozepur city'
//   }
// ]

// import {motion} from 'framer-motion';

// const Contact = () => {
//   return (
//     <motion.section
//     initial={{opacity:0}}
//     animate={{opacity:1,transition:{delay:1.4,duration:0.4,ease:'easeIn'
//     }}}
//     className='py-6'
//     >
//       <div className="container mx-auto">
//         <div className='flex flex-col xl:flex-row gap-[30px]'>
//           <div className='xl:h-[54%] order-2 xl:order-none'>
//             <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'> 
//                <h3 className='text-4xl text-accent'>Let's work together</h3>
//                <p className='text-white/60'>Connect, by contacting me!!</p>
//                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <Input type='firstname' placeholder='Firstname' />
//                 <Input type='lastname' placeholder='Lastname' />
//                 <Input type='email' placeholder='Email address' />
//                 <Input type='phone' placeholder='Phone number' />
//                </div>
               
//                <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder='Select a service'/>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select a Service</SelectLabel>
//                     <SelectItem value='est'>MERN Stack Web Development</SelectItem>
//                     <SelectItem value='cst'>NextJS Web Development</SelectItem>
//                     <SelectItem value='mst'>Core Java Development</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//                </Select>

//                <Textarea
//                  className="h-[200px]"
//                  placeholder="Type your message here."
//                />
//                <Button size="md" className="max-w-40">
//                 Send message
//                </Button>
//                </form>
//           </div>
//           <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
//             <ul className='flex flex-col gap-10'>
//               {info.map((item,index)=>{
//                 return(
//                   <li key={index} className='flex items-center gap-6'>
//                     <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
//                       <div className='text-[28px]'>{item.icon}</div>
//                     </div>
//                     <div className='flex-1'>
//                       <p className='text-white/60'>{item.title}</p>
//                       <h3 className='text-xl'>{item.description}</h3>
//                     </div>
//                   </li>
//                 )
//               })}
//             </ul>
//             </div>
//         </div>
        
//       </div>
//     </motion.section>
//   )
// }

// export default Contact


"use client";
import {Button} from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { Select, SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select';

import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+91) 77194-17720',
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'contactniketchawla@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:'#35, Bedi Green Avenue, Ferozepur city'
  }
]

import {motion} from 'framer-motion';
import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      service: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_3cnsl1p',
      'template_rh4lhlj',
      formData,
      '3lOmOmnkBPjw-bYSN'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      // Reset form
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:1.4,duration:0.4,ease:'easeIn'
    }}}
    className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'> 
               <h3 className='text-4xl text-accent'>Let's work together</h3>
               <p className='text-white/60'>Connect, by contacting me!!</p>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
               <Input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Firstname' />
                <Input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Lastname' />
                <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email address' />
                <Input type='tel' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone number' />
               </div>
               
               <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder='Select a service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='MERN Stack Web Development'>MERN Stack Web Development</SelectItem>
                    <SelectItem value='NextJS Web Development'>NextJS Web Development</SelectItem>
                    <SelectItem value='Core Java Development'>Core Java Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
               </Select>

               <Textarea
                 className="h-[200px]"
                 placeholder="Type your message here."
                 name='message'
                value={formData.message}
                onChange={handleChange}
               />
               <Button type='submit' size="md" className="max-w-40">
                Send message
               </Button>
               </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item,index)=>{
                return(
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
            </div>
        </div>
        
      </div>
    </motion.section>
  )
}

export default Contact
