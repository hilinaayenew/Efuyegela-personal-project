import React from 'react'
import { BsStars } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuCircleEqual } from "react-icons/lu";
import img1 from "../../assets/imgs/pipes.jpg";
const Ofwhite = () => {
  return <section className='bg-gray-100'>
    <div className='container pr-0'>
      {/* upper part*/}
      <div class="flex  justify-center  ">
        <div class=" ml-16">
         <div class="text-3xl font-bold text-center  ">
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
      <div className='pt-6 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-5'>
           {/* first col */}
        <div className="bg-cover bg-center h-screen rounded-2xl relative h-[250px]"
            style={{ backgroundImage: `url(${img1})` }}>
      
        </div>
             {/* second col */}
        <div className='mt-[50px] bg-primary text-white rounded-2xl relative h-[200px]'>

        </div>
              {/* third col */}
        <div className='mt-[50px] bg-gray-100 text-primary rounded-2xl relative h-[250px]'>
            <div>

            </div>
            <div className='mt-[50px] bg-white text-primary rounded-2xl relative h-[149px]'>

            </div>
        </div>
                {/* fourth col */}
        <div className='mt-[50px] bg-secondary text-primary rounded-2xl relative h-[200px]'>
            
        </div >
                {/* fifth col */}
        <div className='rounded-2xl relative h-[250px] bg-primary text-white'>

        </div>

      </div>
    </div>
  </section>
 
}

export default Ofwhite