"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 77194-17720',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'contactniketchawla@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '#35, Bedi Green Avenue, Ferozepur city',
  }
]

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [error, setError] = useState(''); // For error popup message
  const [success, setSuccess] = useState(false); // To display success popup
  const [isSending, setIsSending] = useState(false); // To prevent multiple submissions

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

  // Validates if the phone number contains all repeated digits
  const isRepeatedNumber = (phone) => {
    return /^(\d)\1{9}$/.test(phone); // Checks if the same digit repeats 10 times
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[6-9]\d{9}$/;
    return phonePattern.test(phone) && !isRepeatedNumber(phone); // Added check for repeated numbers
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Invalid email address. Must be in format "yourname@somedomain.com"');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Invalid phone number. It should be 10 digits, start with 6 or above, and not consist of repeating digits.');
      return;
    }

    // Clear any previous errors and disable the button
    setError('');
    setIsSending(true);

    emailjs.send(
      'service_3cnsl1p',
      'template_rh4lhlj',
      formData,
      '3lOmOmnkBPjw-bYSN'
    )
      .then((result) => {
        console.log(result.text);
        setSuccess(true); // Show success popup
        setTimeout(() => setSuccess(false), 3000); // Hide popup after 3 seconds

        // Reset form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log(error.text);
        setError('Failed to send message, please try again.');
      })
      .finally(() => {
        setIsSending(false); // Re-enable the button after the process
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' } }}
      className='py-6'
    >
      <div className="container mx-auto">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-red-500 text-white p-4 rounded-md mb-4"
          >
            {error}
          </motion.div>
        )}
  
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-green-500 text-white p-4 rounded-md mb-4"
          >
            Message sent successfully!
          </motion.div>
        )}
  
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: error || success ? 50 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className='flex flex-col xl:flex-row gap-[30px]'>
            <ScrollArea className="xl:h-[700px] overflow-hidden">
              <div className='xl:h-[54%] order-2 xl:order-none'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                  {/* Form content */}
                  <h3 className='text-4xl text-accent'>Let's work together</h3>
                  <p className='text-white/60'>Connect, by contacting me!!</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Firstname' required />
                    <Input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Lastname' />
                    <Input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email address' required />
                    <Input
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      placeholder="Phone number"
                      maxLength="10"
                      required
                    />
                  </div>
  
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder='Select a service' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value='Java Software Development(SpringBoot,Hibernate)'>Java Software Development(SpringBoot,Hibernate)</SelectItem>
                        <SelectItem value='UI Development'>UI Development</SelectItem>
                        <SelectItem value='MERN Stack Web Development'>MERN Stack Web Development</SelectItem>
                        <SelectItem value='NextJS Web Development'>NextJS Web Development</SelectItem>
                        <SelectItem value='ReactJS Web Development'>ReactJS Web Development</SelectItem>
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
                  <Button
                    type='submit'
                    size="md"
                    className="max-w-40"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              </div>
            </ScrollArea>
            
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <ul className='flex flex-col gap-10'>
                {info.map((item, index) => (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
