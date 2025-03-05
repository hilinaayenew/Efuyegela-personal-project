import React from 'react'
import { CiPill } from "react-icons/ci";
import { FaLinkedin,FaFacebookSquare  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-gray-100 bg-gray-950 pr-4 pl-14 pb-6 '>
        <div className='max-w-[1200px] mr-13 ml-13'>
            <div className='flex  gap-6 py-12 pl-7'>
                <div className=' pr-16 mr-9  pl-8'>
                    <div className='text-[16px]  flex items-center gap-2 font-semi-bold text-white  '>
                        <CiPill className='text-primary' />
                        <p>Prodmast</p>
                    </div>
                    <p className='text-[13px] pr-5 mr-3  text-gray-300 mt-5'> Our solutions make prodution </p>
                    <p className='text-[13px] pr-5 mr-3  text-gray-300 '>  faster and cheaper. Contact us for </p>
                    <p className='text-[13px] pr-5 mr-3  text-gray-300 '> more information. </p>
                </div>
                
                <div  className='pr-7'>
                       <p className='text-[16px]   items-center gap-2 font-semi-bold text-white  '> Company</p>
                       <p className='text-[13px]  text-gray-300 mt-4'> About us </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Customers </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Newsroom </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Events </p>
                       
                </div>
                <div  className='pr-14'>
                       <p className='text-[16px]   items-center gap-2 font-semi-bold text-white  '> Industries</p>
                       <p className='text-[13px]  text-gray-300 mt-4'> Precision Metalforming </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Industrial Manufacturing </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> High Tech & electronics </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Aerospace </p>
                        
                </div>  

                
         
                <div className='mr-8'>
                       <p className='text-[16px]  items-center gap-2 font-semi-bold text-white  '> Products</p>
                       <p className='text-[13px]  text-gray-300 mt-4'> Manufacturing Execution System</p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Enterprise Resource Planning </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Quality Management System </p>
                       <p className='text-[13px]  text-gray-300 mt-2'> Supply Chain Planning </p>
                        
                </div>
                <div className=' relative'>
                       <p className='text-[16px] ml-3  items-center gap-2 font-semi-bold text-white  '> Get in Touch</p>
                       <p className='text-[13px] ml-3 text-gray-300 mt-4'> hallo@prodmast.com</p>
                       <div className='flex ml-3 mt-3 gap-5'>
                       <FaLinkedin  className='text-white bg-gray-800 px-1.5 text-[25px] rounded-sm'/>
                       <AiFillInstagram className='text-white bg-gray-800 px-1 text-[25px] rounded-sm' />
                       <FaFacebookSquare className='text-white bg-gray-800 px-1 text-[25px] roundedd-sm'/>
                       </div>
                       
                </div>
                


            </div>
            <hr class="flex-grow border-t-1 border-gray-800 mx-8 pr-3" />
            <div className='flex items-end mx-8 pr-3 justify-between '>
              <div className='flex'>
                 <div className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white bg-black mt-5 mr-1">
                    <span className="text-white text-[11px] ">C</span>
                 </div>               
                 <p className='text-[13px]  text-gray-300 mt-4'> 2024 Prodmast.Allrights reserved</p>
              </div>
              <div className='flex gap-14'>
              <p className='text-[13px]  text-gray-300 mt-4'> Terms&Conditions </p>
              <p className='text-[13px]  text-gray-300 mt-4'> PrivacyPolicy</p>
              </div>
            </div>

        </div>

    </div>
  )
}

export default Footer