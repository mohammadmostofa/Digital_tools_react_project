import { ShoppingCart } from 'lucide-react';
import React from 'react';
import Navbar_ul from './Navbar_ul';


const Navbar = () => {
  return (
  
    <>

    <nav className=' container flex justify-between items-center md:gap-x-5 py-4 mx-auto'>

    <h1 className=' text-violet-500 font-bold text-xl md:text-3xl'>DigiTools</h1>
      
      <Navbar_ul></Navbar_ul>
    
     <div className='flex justify-end items-center space-x-4'>
        <div className='text-center'><ShoppingCart></ShoppingCart> </div>
        <div> <button className='' > login </button> </div>
        <div> <button className='btn text-nowrap'> get Started</button> </div>
         
     </div>


    </nav>

   

 


    </>

  );
};

export default Navbar;