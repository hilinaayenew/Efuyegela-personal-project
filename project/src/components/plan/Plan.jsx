import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";

const Plan = () => {
  return <section className='bg-black px-16  pb-16 pt-3'>
    <div className='px-16 mx-14 mb-5'>
    <div class="justify-center  text-white text-center  ">
       <div className='text-2xl text-white text-center'>
           <h1 class=" pt-8 mt-4  mx-0 ">Tailored Plans for Your</h1>
           <h1 class=" pt-2   mx-0">Manufactoring Scale</h1>
        </div>
           <p className='pt-3 text-[10px]'>Flexible pricing for any business size.</p>
    </div>
    <div className='pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-7 items-center mx-14 px-13  mt-5 pb-16'>
           <div className=' bg-fifth rounded-2xl relative h-[400px] px-7 pl-7 pr-14 pt-8'>
            <div className='text-white opacity-95'>
             <h1 class="text-[18px] mb-3">Starter</h1>
             <p  class="text-[13px] text-gray-400 mb-6"> This package offers the basic features you need to get started</p>
             <p class="text-[22px] font-semibold mb-3"  >$39<span class="text-[13px] text-gray-400">/month</span></p>
             <button className='border border-white w-full rounded-2xl  mb-4 py-1'> Get Started</button>
             <div class="flex items-center mt-4 mb-2">
                <hr class="flex-grow border-t-1 border-gray-400" />
                <span class="mx-3 text-[13px] text-gray-400">Features</span>
                <hr class="flex-grow border-t-1 border-gray-400" />
             </div>
            <div className='flex  gap-2 my-1 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> Production up to 10,000 units per month </p>
                </div>
            </div>
            <div className='flex  gap-2 mb-1'>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> 24/7 technical support</p>
                </div>
            </div>
            <div className='flex  gap-2 mb-1 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> Access the production dashboard</p>
                </div>
            </div>
            <div className='flex  gap-2 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'>Initial setup guide</p>
                </div>

             </div>
            </div>
           </div>
           <div className=' bg-fifth rounded-2xl relative h-[400px] px-7 pl-7 pr-14 pt-8'>
            <div className='text-white opacity-95'>
             <h1 class="text-[18px] mb-3">Enterprise</h1>
             <p  class="text-[13px] text-gray-400 mb-6"> This package provides full access to all premium features.</p>
             <p class="text-[22px] font-semibold mb-3"  >$99<span class="text-[13px] text-gray-400">/month</span></p>
             <button className='border border-white w-full rounded-2xl  mb-4 py-1'> Get Started</button>
             <div class="flex items-center mt-4 mb-2">
                <hr class="flex-grow border-t-1 border-gray-400" />
                <span class="mx-3 text-[13px] text-gray-400">Features</span>
                <hr class="flex-grow border-t-1 border-gray-400" />
             </div>
            <div className='flex  gap-2 my-1 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> Unlimited production units </p>
                </div>
            </div>
            <div className='flex  gap-2 mb-1'>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> Dedicated account manager</p>
                </div>
            </div>
            <div className='flex  gap-2 mb-1 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'> Tailored manufacturing solutions</p>
                </div>
            </div>
            <div className='flex  gap-2 '>
                <div className='text-white pt-1'>
                    <GoCheckCircleFill />
                </div>
                <div>
                    <p className=' text-[13px] text-gray-300'>Predictive production optimization</p>
                </div>

             </div>
            </div>
           </div>
    </div>
    <div className='px-13 mx-14'>
           <div className='  bg-primary rounded-2xl relative h-[200px] mx-0 justify-center  text-white text-center flex '>
              
              <div className='absolute inset-0 bg-slanted-lines opacity-10'>

              </div>
              <div >
                <div className='text-2xl text-white text-center'>
                    <h1 class=" pt-8 mt-4  mx-0 ">Professional</h1>
                </div>
                    <p className='text-gray-400 pt-3 text-[10px]'>Designed for greater flexibility. this solution offers </p>
                    <p className=' text-gray-400 text-[10px]'>advanced tools for custom tailoring to your needs.</p>
                    <button className=' text-primary font-semibold mt-3  text-sm border border-secondary px-6 py-1 rounded-full hover:shadow-inset bg-secondary  hover:bg-plight hover:border-transparent transition-all duration-200' >
                     Get Started
                    </button>
              </div>
           </div>
           <style jsx>{`
              .bg-slanted-lines {
              background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
               linear-gradient(to right , rgba(255, 255, 255, 0.6) 1px, transparent 1px);
              background-size: 90px 50px; /* Adjust the size of the grid */
              z-index-0
              }
           `}</style>
    </div>
      
    </div>
    
  </section>
}

export default Plan