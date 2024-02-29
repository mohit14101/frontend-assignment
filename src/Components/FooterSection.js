
import React from 'react';
import logo from "../Assets/bluetick_consultants.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import instagram from "../Assets/instagram_icon.png"

const FooterSection = () => {
  return (
    <div className="w-full min-h-[100px] bg-gray-500 text-white flex flex-col pb-5 px-5 md:px-10 pt-10 gap-5">
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex flex-col gap-2 md:mr-10'>
          <img src={logo} className='h-[45px] w-[200px]' alt="Bluetick Consultants Logo"/>
          <div className='font-bold text-[20px]'>Bluetick Consultants LLP</div>
          <p>contact@bluetickconsultants.com</p>
        </div>
        <div className='mt-5 md:mt-0'>
          <h2 className='font-[500] text-[24px] text-gray-300'>Services</h2>
          <div className='flex flex-col items-start'>
            <button>Remote Developers</button>
            <button>Product Development</button>
            <button>Digital Transformation</button>
          </div>
        </div>
        <div className='mt-5 md:mt-0'>
          <h2 className='font-[500] text-[24px] text-gray-300'>Capabilities</h2>
          <div className='flex flex-col items-start'>
            <button>Front-end Engineering</button>
            <button>Cloud & DevOps</button>
            <button>Web Framework</button>
            <button>Data Analytics & Visualization</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 pt-5'>
        <div className='flex gap-5'>
          <img src={whatsapp} alt="WhatsApp Icon"/>
          <img src={instagram} alt="Instagram Icon"/>
        </div>
        <div className='text-black text-center md:text-left'>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
