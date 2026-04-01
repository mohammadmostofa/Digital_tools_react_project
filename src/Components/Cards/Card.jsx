import React from 'react';
import Feature from './Feature';
import Cart from '../Cart';

const Card = ({card,handleCards}) => {
   const singleCard = card
      

  //  conditional render

  return (

    <div className=' p-10  h-full bg-gray-50 shadow-amber-50 rounded-2xl '>
       
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


                   <button onClick={() => handleCards(card)} className= {`btn bg-gradient-to-r from-[#7260fa] to-[#8906ed] rounded-full text-white  `}> {singleCard.button} </button>

                                  
            </div>

            {
               
            }
      
    </div>
    
  );
};

export default Card;