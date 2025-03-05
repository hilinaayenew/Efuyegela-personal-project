import React from 'react'
import { GoNorthStar } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { PiDropboxLogoThin } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { LuShieldHalf } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { AiOutlineLineChart } from "react-icons/ai";

const Services = () => {
  return <section className='bg-primary px-16 pb-2'>
    <div>
      <div class="justify-center  text-white text-center  ">
       <div className='text-2xl text-white text-center'>
           <h1 class=" pt-8   mx-0 ">Efficient and Integrated</h1>
           <h1 class=" pt-2   mx-0">Manufactoring Services</h1>
        </div>
           <p className='pt-3 text-[10px]'>Simplify operations with our efficient,quality-focused services.</p>
      </div>
      
      <div className='pt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-7 items-center ml-16 pl-16 mr-16 pr-16 mt-5 pb-16'>
                 {/* first col */}
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                  <div className='flex justify-between px-5 py-6 text-white'>
                  <GoNorthStar />
                  <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Production and Assembly</h1>
                    <p className='text-[11px] text-gray-300'> Details on production processes ,assembly, capacity,and product types.</p>
                  </div>
            
              </div>
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                <div className='flex justify-between px-5 py-6 text-white'>
                  <PiDropboxLogoThin />
                  <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Custom Manufacturing</h1>
                    <p className='text-[11px] text-gray-300'> Custom product creation with design and customization options.</p>
                  </div>
            
              </div>
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                 <div className='flex justify-between px-5 py-6 text-white'>
                   <LiaToolsSolid />
                   <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Quality Control</h1>
                    <p className='text-[11px] text-gray-300'> Procedures and systems in place to ensure high product quality.</p>
                  </div>  
            
              </div>
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                <div className='flex justify-between px-5 py-6 text-white'>
                  <LuShieldHalf />
                  <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Technology and Innovation</h1>
                    <p className='text-[11px] text-gray-300'> Details on the latest manufacturing technologies and ongoing innovation.</p>
                </div>
            
              </div>
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                <div className='flex justify-between px-5 py-6 text-white'>
                  <FiBox />
                  <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Packaging and Logistics</h1>
                    <p className='text-[11px] text-gray-300'> Packaging and logistics for shipping to customers and sistributors.</p>
                </div>
            
              </div>
              <div className=" bg-opacity-10  bg-teal-600 rounded-2xl relative h-[170px] mx-0 ">
                <div className='flex justify-between px-5 py-6 text-white'>
                  <AiOutlineLineChart />
                  <MdArrowOutward />
                  
                  </div>
                  <div className='text-white pl-5 mt-5'>
                    <h1 className='text-[20px]'>Consulting Market Research</h1>
                    <p className='text-[11px] text-gray-300'> Services to help companies understand market needs and provide strategic advice.</p>
                  </div> 
            
              </div>
                      
      </div>
    

    </div>
  </section>
}

export default Services