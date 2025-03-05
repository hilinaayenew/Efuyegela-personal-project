import React from 'react'
import PropTypes from 'prop-types'

const Work = props => {
  return  <section className='bg-white pl-10 py-16 mr-15 '>
      <div className='flex gap-16 ml-16 mr-4 px-12 '>
          
          <div className='pr-9 mr-7 w-full my-12 '>
              <h1 className='text-[30px] text-primary font-bold'>Empowering Top Companies with Seamless Integrations</h1>
              <p className='py-5 text-[14px] text-gray-500 mt-2'> Experience seamless connections with our innovative solutions, designed to effortlessly integrate with your existing systems, enhance productivtiy, and drive your business towards greater success. </p>
              <button className=' text-primary font-semibold mt-3  text-[13px] border border-secondary px-6 py-2 rounded-full hover:shadow-inset bg-secondary  hover:bg-plight hover:border-transparent transition-all duration-200' >
                     Work with us
              </button>
          </div>
          <div className='bg-secondary  py-16 rounded-lg  w-full'>
              
          </div>
      </div>
  
    </section>

}

Work.propTypes = {}

export default Work