import { Box, Rocket, UserRound } from 'lucide-react';
import React from 'react';

const Information = () => {
  return (
    <div className='container mx-auto py-10 my-20 '>
      
      <div className='flex flex-col justify-center items-center py-5 space-y-4'>

              <h1 className='text-3xl font-bold text-black pt-10'>Get Started in 3 Steps</h1>
              <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

                    {/* card started */}
       <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-10 gap-5'>
  

               <div className='border  border-gray-200 drop-shadow-2xl shadow-white rounded-xl bg-white p-4 h-110 flex flex-col'>

                <div className=' flex justify-end  text-center'>
                        <h1 className='bg-gradient-to-r from-[#7260fa] to-[#8906ed]
                         rounded-full flex justify-center items-center font-bold text-white  w-12 h-12 text-center text-xl'>01</h1> 
                </div>
                 
                 <div className='flex flex-col justify-center items-center text-center pt-16 space-y-4'>            
                        <UserRound className='border border-gray-400  rounded-full bg-violet-200 p-2 text-violet-900 ' size={60} />
                        <h2 className='font-bold text-black text-2xl'>Create Account</h2>
                        <p className='px-2'>Sign up for free in seconds. No credit card required to get started.</p>

                 </div>

               </div>

               <div className='border border-gray-200 drop-shadow-2xl shadow-white rounded-xl bg-white p-4 h-110 flex flex-col  '>

                <div className=' flex justify-end  text-center'>
                        <h1 className='bg-gradient-to-r from-[#7260fa] to-[#8906ed]
                         rounded-full flex justify-center items-center font-bold text-white  w-12 h-12 text-center text-xl'>02</h1> 
                </div>
                 
                 <div className='flex flex-col justify-center items-center text-center pt-16 space-y-4'>            
                        <Box className='border border-gray-400 
                         rounded-full bg-violet-200 p-2 text-violet-900 ' size={60} > </Box>
                        
                        <h2 className='font-bold text-black text-2xl'>Choose Products</h2>
                        <p className='p-2'>Browse our catalog and select the tools that fit your needs.</p>

                 </div>

               </div>

               <div className='border border-gray-200 drop-shadow-2xl shadow-white rounded-xl bg-white p-4 h-110 flex flex-col  '>

                <div className=' flex justify-end  text-center'>
                        <h1 className='bg-gradient-to-r from-[#7260fa] to-[#8906ed]
                         rounded-full flex justify-center items-center font-bold text-white  w-12 h-12 text-center text-xl'>01</h1> 
                </div>
                 
                 <div className='flex flex-col justify-center items-center text-center pt-16 space-y-4'>            
                        <Rocket className='border border-gray-400  rounded-full bg-violet-200 p-2 text-violet-900 ' size={60} />
                        <h2 className='font-bold text-black text-2xl'>Start Creating</h2>
                        <p className='p-2'>Download and start using your premium tools immediately.</p>

                 </div>

               </div>

               

               
             




       </div>

      

    </div>
  );
};

export default Information;