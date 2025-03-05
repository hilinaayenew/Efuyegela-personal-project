import React from 'react'

const Work2 = () => {
  return <section>
     <div >
           <div className='  bg-primary  relative  mx-0 pt-10 pb-11 justify-center  text-white text-center flex '>
              
              <div className='absolute inset-0 bg-slanted-lines opacity-10'>

              </div>
              <div >
                <div className='text-3xl text-white text-center'>
                    <h1 class=" pt-8   mx-0 ">From Idea to Production in  Days </h1>
                </div>
                    <p className='text-gray-400 pt-5 text-[13px]'>Accelerate your production with our technology. Reduce</p>
                    <p className='text-gray-400  text-[13px]'> downtime and optimize costs.Get a Special offer now! </p>
                    
                    <button className=' text-primary font-semibold mt-10 text-[11px] border border-secondary px-6 py-2 rounded-full hover:shadow-inset bg-secondary  hover:bg-plight hover:border-transparent transition-all duration-200' >
                     Work With Us
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
      
    
  </section>
}

export default Work2