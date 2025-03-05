import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { LiaStumbleuponCircle } from "react-icons/lia";
import { SlOptionsVertical } from "react-icons/sl";
import { RiBookReadLine } from "react-icons/ri";
const Benefit = () => {
  return <section className='bg-white pl-10 py-16 mr-15 mb-6'>
    <div className='flex gap-12 ml-12 mr-16'>
        <div className=' px-8 rounded-lg  w-full'>
          <div className="mt-2  rounded-lg relative pt-16 pb-16  bg-gray-100 w-70 h-108 flex items-center justify-center ">
             {/* First (Main) Box */}
                <div className="w-80 h-72 pt-5 pb-5 bg-white rounded-lg shadow-lg">
                   <h1  className='pl-5 text-[12px] font-semi-bold text-gray-400'>Total Projects</h1>
                   <div className=' pl-5  pt-1 flex'>
                      <h1 className='text-[14px] font-semi-bold text-black'>1475</h1>
                      <LiaStumbleuponCircle className='mt-1 text-green-600 ml-1 mr-1'/>
                      <p class="text-green-600 text-[11px] mt-1"> 34%</p>
                   </ div>
                   <hr class="flex-grow border-t-1 border-gray-200 mx-5 mt-3" />
                   <div className='mt-3 flex pl-5  items-center'>
                    <p class="mr-2">Finished</p>
                    <div class="mt-1 bg-gray-200 rounded-lg px-12 mx-3 h-2 ">

                    </div>
                    <p className='mt-1 ml-5'>10%</p>

                   </div>

                   <div className='mt-1 flex pl-5  items-center'>
                    <p class="mr-2">Finished</p>
                    <div class="mt-1 bg-gray-200 rounded-lg px-12 mx-3 h-2 ">

                    </div>
                    <p className='mt-1'>10%</p>

                   </div>

                   <div className='mt-1 flex pl-5  items-center'>
                    <p class="mr-2">Finished</p>
                    <div class="mt-1 bg-gray-200 rounded-lg px-12 mx-3 h-2 ">

                    </div>
                    <p className='mt-1'>10%</p>

                   </div>
                </div>

              {/* Overlapping Box */}
                <div className="absolute w-48 h-40 bg-white rounded-lg shadow-lg bottom-[15px] right-[40px]">
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
            
        </div>
        <div className='pr-2 mr-1 w-full'>
            <h1 className='text-[35px] text-primary font-semibold'>Key Benefits of Our System for Your Business Efficiency</h1>
            <p className='text-[14px] text-gray-500 mt-2'> Our systems boost productivity, cut costs, and drive business growth. </p>
            <div className='flex mr-5 gap-6 mt-5'>
              <div className='text-primary pt-2'>
              <GoCheckCircleFill />
              </div>
              <div>
                <h1 className='font-bold text-lg'>Boosting Quality with Tech</h1>
                <p className='mt-2 text-[14px] text-gray-500'> with advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.</p>
              </div>
            </div>
            <div className='flex mr-5 gap-6 mt-5'>
              <div className='text-primary pt-2'>
              <GoCheckCircleFill />
              </div>
              <div>
                <h1 className='font-bold text-lg'>Optimization Production Process</h1>
                <p className='mt-2 text-[14px] text-gray-500'> Boost factory efficiency and productivity with our innoviative solutions. See how the latest technology can maximize your output.</p>
              </div>
            </div>
            <div className='flex mr-5 gap-6 mt-5'>
              <div className='text-primary pt-2'>
              <GoCheckCircleFill />
              </div>
              <div>
                <h1 className='font-bold text-lg'>AI-Driven Production</h1>
                <p className='mt-2 text-[14px] text-gray-500'> Leverage the power of AI to transform your manufacturing processes. achieving faster and more effective results.</p>
              </div>
            </div>
        </div>
    </div>

  </section>
}

export default Benefit