/* eslint-disable no-unused-vars */
import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contacts = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a089e8d-dd1a-4035-9a2b-6f410052baa2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  }

  return (
    <motion.div
        initial={{opacity:0, x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
    >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Contact
             <span className='underline underline-offset-4 decoration-1 under font-light'>
                 With Us
             </span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'> 
            Ready to make a move? Let's build your Future Together
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl md:mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name 
                    <input type="text" name="Name" placeholder='Your Name' required
                           className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                    />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email Id
                    <input type="email" name="Email" placeholder='Your Name' required
                           className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                    />
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea name="Message" placeholder='Message' required 
                          className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'>
                </textarea>
            </div>
            <button className='bg-blue-600 justify-center text-white py-2 px-12 mb-10 rounded'>
                {result ? result : "Send Message"}
            </button>
        </form>

    </motion.div>
  )
}

export default Contacts
