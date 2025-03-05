import React from 'react'
import { BsStars } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaRegFileAlt, FaStar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuCircleEqual } from "react-icons/lu";
import img1 from "../../assets/imgs/pipes.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import { GoNorthStar } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { RiBookReadLine } from "react-icons/ri";
import { LiaStumbleuponCircle } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";

const Ofwhite = () => {
  return <section className='bg-gray-100 pb-7'>
    <div className='container pr-0 pr-12'>
      {/* upper part*/}
      <div class="flex  justify-center  ">
        <div class=" ml-16">
         <div class="text-[40px] font-bold text-center  ">
           <h1 class=" pt-8 mt-4 w-full max-w-2xl mx-0 ">The Future of Manufacturing</h1>
            <h1 class=" pt-2  w-full max-w-2xl mx-0">
            With <span class="text-primary">Latest Technology</span>
           </h1>
          </div>
          </div>
      </div>
      {/* second part*/}
      <div className=' flex items-center justify-between '>
        <div >
        <BsStars className=' ml-12 text-2xl mt-2' />
        <BsArrowUpRightCircle className=' text-2xl' />
        <FaRegFileAlt className='text-primary bg-secondary  ml-12 text-2xl' />
        </div>
        <div className='pb-5 ml-12 '>
          <p className='text-sm mb-4 mt-3 '>Expert tech to elevate your manufacturing.Let's take your business further.</p>
          <div className=' flex justify-center '>
             <button className='text-white mt-3  text-sm border border-primary px-3 py-1 rounded-full hover:shadow-inset bg-primary  hover:bg-plight hover:border-transparent transition-all duration-200' >
                Get Started
             </button>
             <button className='text-primary mt-3 ml-3 text-sm border border-primary px-3 py-1 rounded-full hover:shadow-inset bg-white  hover:bg-plight hover:border-transparent transition-all duration-200' >
                Try Demo
             </button>
          </div>
        </div>
        <div className='mr-13'> 
        <IoStatsChart className='text-primary bg-secondary text-2xl ml-12 ' />
        <LuCircleEqual  className='text-primary text-2xl '/>
        </div>
      </div>
      {/* third part*/}
      <div className='pt-6 pb-8 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5  justify-between items-center'>
           {/* first col */}
        <div className="bg-cover bg-center  rounded-2xl  h-[250px] mx-0 "
            style={{ backgroundImage: `url(${img1})` }}>
              
      
        </div>
             {/* second col */}
        <div className='items-center pl-5'>
        <div className='mt-[50px] bg-primary text-white rounded-2xl relative h-[200px] max-w-[75%] mx-0'>
             <div class="justify-center  text-white text-center  ">
                <div className='text-2xl text-white text-center'>
                    <h1 class=" pt-11 mt-4  mx-0  font-semibold">100+</h1>
                </div>
                    <p className='px-3 text-gray-400 pt-2 text-[14px]'>Our Esteemed Clients and Partners </p>
                    
              </div>

        </div>
        </div>
              {/* third col */}
        <div className=' bg-gray-100 text-primary rounded-2xl relative h-[250px]   '>
            <div className='w-full flex items-center justify-center gap-2'>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <p className='font-bold'>5.0</p>
            </div>
            <div className='w-full flex items-center justify-center'>
            <p className='text-gray-700'>from 80+ <u className='text-black  font-semibold'>reviews</u></p>
            </div>
            <div className='mt-[39px] bg-white text-primary rounded-2xl relative h-[160px]  '>
               <div className='flex justify-between px-5 pt-6 pb-2 '>
                    <div className='text-secondary'><RiBookReadLine className='text-primary bg-secondary ' /></div>
                    <SlOptionsVertical />
                </div>
                <div className=' pl-5  flex'>
                  <h1 className='text-[15px] font-semi-bold text-black'>Total Projects</h1>
                  <LiaStumbleuponCircle className='mt-1 ml-1'/>
                  <p class="text-primary text-[11px] mt-1"> 8%</p>
                  
                </div>
                <h1 className='text-[25px] font-bold pl-5'>1951+</h1>
                <h1 class='pl-5 text-[13px] text-gray-500'>Increase of <span class='text-green-400'>126</span> this month</h1>

             </div>
        </div>
                {/* fourth col */}
        <div className='items-center pl-5'>
        <div className='mt-[50px] bg-secondary text-primary rounded-2xl relative h-[200px] w-[75%] mr-0'>
             <div class="justify-center  text-primary text-center  ">
                <div className='text-2xl text-primary text-center'>
                    <h1 class=" pt-11 mt-4  mx-0  font-bold">6+</h1>
                </div>
                    <p className='px-4 text-primary pt-2 text-[14px]'>Years of Dedicated Service </p>
                    
              </div>
            
        </div >
        </div>
                {/* fifth col */}
        <div className="bg-cover bg-center  rounded-2xl relative h-[250px] mx-0 pt-16"
            style={{ backgroundImage: `url(${img2})` }}>
              <div class="justify-center  text-white pt-12  pl-7 mr-5 ">

                <CiClock2  className='text-2xl '/>
                <p className='pr-3 text-white pt-4 text-[14px]'>Achieve optimal efficiency and Boost productivity </p>
                    
              </div>
        </div>

      </div>
    </div>
  </section>
 
}

export default Ofwhite