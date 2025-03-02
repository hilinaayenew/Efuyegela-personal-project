import React from 'react'
import { CiPill } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
const NavbarMenu=[
    {
        id:1,
        title:"Home ",
        link:"/",
    },
    {
        id:2,
        title:" About",
        link:"#",
    },
    {
        id:3,
        title:"Services",
        link:"#",
    },
    {
        id:4,
        title:"Contact",
        link:"#",
    },
]

const Navbar = () => {
  const[open,setOpen]=React.useState(false);
  return (
  <>
  <nav className='mr-0'>
      
      <div className="container flex justify-between items-center py-4 md:pt-4  pr-0 mr-0   ">
        {/* LogoSEction*/}
        <div className='text-lg flex items-center gap-3 font-bold  '>
           <CiPill className='text-primary' />
           <p>Prodmast</p>
        </div>
        {/* MenuSEction*/}
        <div className='hidden md:block  ' >
            <ul className='flex items-center gap-6 text-gray-800'>
                {NavbarMenu.map((menu)=>(
                    <li key={menu.id} className='text-sm'>
                        <a href={menu.link} className='inline-block py-1 px-3 hover:text-tertiary font-semibold'>
                            {menu.title}
                        </a>
                    </li>
                ))}
            </ul>
           
        </div>
        <div className='px-0 hidden md:block '>
             <button className='text-white text-sm border border-primary px-4 py-2 rounded-full hover:shadow-inset bg-primary  hover:bg-plight hover:border-transparent transition-all duration-200 ' >
                SignUp
             </button>
        </div>
        {/* moblie hamburger*/}
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
            <MdMenu className="text-4xl"/>
        </div>
      </div>
    </nav>
    <ResponsiveMenu open={open} />
    </>
  );
  
}

export default Navbar;