import React from 'react';
  const Footer = () => {
  return (
    <div className='bg-[#fafafa] grid grid-cols-1   bg-gradient-to-r from-[#1d1c2a]
         to-[#8825d3] justify-center items-center border pt-10'>
      
         <div className='container mx-auto flex   py-10 '>

                 <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 '>

                  <div className='mr-10 '>                     
                    <h1 className='font-bold text-2xl text-white'> DigiTool </h1>
                     <p className='text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                  </div>

                  <div>
                          <h4  className='font-bold text-2xl text-white'>Product</h4>
                          <h5 className=''>Features</h5>
                          <h5 className='text-gray-400'>Pricing</h5>
                          <h5 className='text-gray-400'>Templates</h5>
                          <h5 className='text-gray-400'>Integrations</h5>
                    
                  </div>

                  <div>
                          <h4  className='font-bold text-2xl text-white' >Company</h4>
                          <h5 className='text-gray-400'>About</h5>
                          <h5 className='text-gray-400'>Blog</h5>
                          <h5 className='text-gray-400'>Careers</h5>
                          <h5 className='text-gray-400'>Press</h5>
                    
                  </div>

                  <div>
                          <h4  className='font-bold text-2xl text-white' >Resources</h4>
                          <h5 className='text-gray-400'>Documentation</h5>
                          <h5 className='text-gray-400'>Help Center</h5>
                          <h5 className='text-gray-400'>Community</h5>
                          <h5 className='text-gray-400'>Contact</h5>
                    
                  </div>

                  <div >
                          <h4  className='font-bold text-2xl text-white '  >Social Links</h4>
                          <div className='flex items-center py-4'>
                                <img src="./Facebook.png" alt="" />
                                <img src=".fi_5968958.png" alt="" />
                                <img src=".Instagram.png" alt="" />
                          </div>
                          
                    
                  </div>






                 </div>

         </div>
   
          <hr className='border w-full border-gray-200 ' />

         <div className='  grid grid-cols-1 justify-center items-center md:flex md:justify-between py-4 px-2'>
                    <div>
                        <h4 className='text-white' >© 2026 Digitools. All rights reserved.</h4>
                    </div>

                    <div className='flex  text-white '>
                        <h4 className='text-gray-600' >privacy policy</h4>
                        <h4 className='text-gray-600'>terms of server</h4>
                        <h4 className='text-gray-600'>cookies</h4>
                    </div>
         </div>

    </div>
  );
};

export default Footer;