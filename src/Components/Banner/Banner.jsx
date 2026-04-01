import { Circle, Play } from 'lucide-react';
import React from 'react';

const Banner = () => {
     

  return (
    <>
    
     <div className='container  grid grid-cols-1 space-y-10  md:flex justify-between items-center  mx-auto mt-40'>


                 <div className='flex flex-col space-y-6 px-4 ' >

                  <h2 className=' flex justify-center items-center bg-gradient-to-r gap-x-1 from-[#7260fa] to-[#8906ed] w-[80%] md:w-[60%] text-center p-2 rounded-full text-white  '>  <Circle className='bg-gradient-to-r from-[#9d94dc] to-[#9e35ef] text-violet-900 border-3 rounded-full'></Circle>  New: AI-Powered Tools Available</h2>
                  <h1 className='font-bold text-black text-md md:text-3xl'>Supercharge Your Digital Workflow</h1>

                  <p className=''>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                  </p>

                     <div className=' flex  space-x-6  '>

                <button className='btn text-nowrap text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-violet-800 rounded-full capitalize '> get Started</button> 
                <button className='btn text-nowrap bg-gradient-to-r bg-white text-violet-500 rounded-full hover:bg-violet-500 hover:text-white  '> <Play></Play> Watch Demo</button> 


                     </div>

                 </div>


                 <div className='flex justify-center items-center'>
                        <img src="/src/assets/images/banner.png" alt="" className='mx-auto' />
                 </div>

     </div>


     {/* count number  */}

     <div className='container mx-auto'>

             <div className='container mx-auto grid grid-cols-1 space-x-4  md:grid-cols-2 lg:grid-cols-3  bg-violet-800 justify-evenly items-center my-10 py-10'>

                        <div className='flex flex-col justify-center items-center space-y-4'>
                     <h3 className='font-bold text-4xl text-white   '> 50k+ </h3>
                      <p className='text-green-50 text-xl font-light'>Active Users</p>
             </div>

      

             <div className='flex flex-col justify-center items-center space-y-4'>
                     <h3 className='font-bold text-4xl text-white   '>200+</h3>
                      <p className='text-green-50 text-xl font-light'>Premium Tools</p>
             </div>

    

             <div className='flex flex-col justify-center items-center space-y-4'>
                     <h3 className='font-bold text-4xl text-white   '>4.9</h3>
                      <p className='text-green-50 text-xl font-light'>Rating</p>
             </div>

             </div>

            

      </div>

    </>
  );
};

export default Banner;