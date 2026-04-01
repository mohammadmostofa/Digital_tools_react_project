import React from 'react';
import Feature from './Cards/Feature';
import { Trash } from 'lucide-react';

const Cart = ({card,countCard,setCountCard}) => {

  const removeHadleBtn = () =>{
       const updatedCard =  countCard.filter(items => items.id !== card.id);
           setCountCard(updatedCard);
  }

 

  return (
        
    <div >

              <div className='flex justify-between items-center  bg-gray-300 p-4 rounded-2xl my-4'>
                 <div className='flex justify-center items-center text-center space-y-4 py-10'>

                <div className=' mx-auto my-4 mr-4 '>
                  <h1 className='text-center text-3xl ' > {card.icon} </h1>
                  </div>
               
                 <div className='flex flex-col justify-center items-center space-y-2'>
                    <h2 className='text-3xl font-bold text-black text-nowrap'> {card.name} </h2>
                   <h3 className='text-black font-bold text-nowrap'> {card.period} </h3>
                 </div>
                                 
            </div>

            <div>
              <button onClick={removeHadleBtn}><Trash></Trash></button>
            </div>
              </div>

                 
    </div>
       
       

  );
};

export default Cart;