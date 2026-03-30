import React from 'react';

const Navbar_ul = () => {
  return (
    <>
    
   
   {/* small device */}
    <ul className='grid absolute md:hidden top-15 left-0 justify-center items-center'>

           <li className='list-none  px-6 py-3 md:my-2' ><a className='' href="/product">Products</a></li>
           <li className='list-none  px-6 py-3 md:my-2' ><a className='' href="/product">Features</a></li>
           <li className='list-none  px-6 py-3 md:my-2' ><a className='' href="/product">Pricing</a></li>
           <li className='list-none  px-6 py-3 md:my-2' ><a className='' href="/product">Testmonials</a></li>
           <li className='list-none  px-6 py-3 md:my-2' ><a className='' href="/product">FAQ</a></li>

    </ul>


   {/* medium device */}
    <ul className='hidden md:flex justify-center items-center '>

           <li className='list-none  px-3 py-3 my-2' ><a className='' href="/product">Products</a></li>
           <li className='list-none  px-3 py-3 my-2' ><a className='' href="/product">Features</a></li>
           <li className='list-none  px-3 py-3 my-2' ><a className='' href="/product">Pricing</a></li>
           <li className='list-none  px-3 py-3 my-2' ><a className='' href="/product">Testmonials</a></li>
           <li className='list-none  px-3 py-3 my-2' ><a className='' href="/product">FAQ</a></li>

    </ul>

    </>
  );
};

export default Navbar_ul;