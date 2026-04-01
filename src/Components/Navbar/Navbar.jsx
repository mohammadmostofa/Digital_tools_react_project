import { ShoppingCart } from 'lucide-react';
import React from 'react';
import Navbar_ul from './Navbar_ul';


const Navbar = ({countCard,}) => {
  return (
  
    <>

    <header className='container mx-auto '>

<nav className='container flex justify-between items-center md:gap-x-5 py-4 mx-auto fixed top-0  bg-gray-50 px-3'>

    <h1 className=' text-violet-500 font-bold text-xl md:text-3xl'>DigiTools</h1>
      
      <Navbar_ul></Navbar_ul>
    
     <div className='flex justify-end items-center space-x-4'>
        <div className='text-center'><ShoppingCart className='relative'></ShoppingCart> <span className='absolute top-2 w-8 h-8 bg-red-500 rounded-full text-center text-white py-1 '>{countCard.length}</span> </div>
        <div> <button className='' > login </button> </div>
        <div> <button className='btn text-nowrap text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full capitalize  '> get Started</button> </div>
         
     </div>


    </nav>

    </header>

   

 


    </>

  );
};

export default Navbar;