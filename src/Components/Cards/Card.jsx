import React from 'react';
import Feature from './Feature';
import Cart from '../Cart';
import { Check } from 'lucide-react';

const Card = ({card,handleCards,countCard}) => {
   const singleCard = card
      
   const isAlreadyAddCard = countCard.some(items => items.id === card.id )//matching element catch by some array function
   

  //  conditional render

  return (

    <div className=' p-10  h-full bg-gray-100 shadow-amber-50 rounded-2xl '>
       
              <div className='flex justify-end '>
                      <button className={` btn  px-6 rounded-full ${singleCard.tagType === 'best seller' ? 'bg-yellow-200' : 'bg-green-200'}`} > {singleCard.tagType} </button>
                </div>              

            <div className='flex flex-col justify-start space-y-4'>
                    <h1> {card.icon} </h1>
                   <h2 className='text-3xl font-bold text-black'> {singleCard.name} </h2>
                   <p className='text-xl font-normal text-black'> {singleCard.description} </p>
                   <h3 className='text-black font-bold'> {singleCard.period} </h3>

                   {

                     singleCard.features.map((feature,index) => <Feature key={index} feature = {feature} > </Feature> )

                   }


                  {
                    <button  disabled = {isAlreadyAddCard}
                    onClick={() => handleCards(card)}
                     className= {`btn rounded-full text-white 
                              ${isAlreadyAddCard? 'bg-gradient-to-r from-[#006278] to-[#016ea0]':'bg-gradient-to-r from-[#7260fa] to-[#8906ed]' }
                     `}> 
                        
                        {isAlreadyAddCard?  <div className='flex justify-center items-center'><Check /> Add to Card</div> : singleCard.button }

                      </button>
                  } 

                                  
            </div>

            {
               
            }
      
    </div>
    
  );
};

export default Card;