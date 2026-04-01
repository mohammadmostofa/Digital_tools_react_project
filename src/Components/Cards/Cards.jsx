import React, { use, useState, } from 'react';
import Card from './Card';
import Cart from '../Cart';

const Cards = ({cardPromise,countCard,handleCards}) => {

  const allCards = use(cardPromise)

  const [selectedType, setSelectedType] = useState('Products')

  // handle function

  
  return (
    

    <>

     <main className='container mx-auto'>

               <div className='container mx-auto'>
                      <h3 className='text-center font-bold text-4xl '>   Premium Digital Tools</h3>
                      <p className='text-center  my-5'>Choose from our curated collection of premium digital
                         products designed <br />  to boost your productivity and creativity.</p>
               </div>
                     {/* action btn */}
               <div className='flex justify-center items-center space-x-4 py-5 '>

                       <div className='border bg-white  rounded-full border-gray-200 flex justify-end items-center space-x-2 '>

                       <button onClick={ () => {setSelectedType('Products')}} 
                        className = {`btn ${selectedType === 'Products' ? 'bg-gradient-to-r from-[#7260fa] to-[#8906ed] text-white' : 'bg-white text-black' }
                                     rounded-full border-none  font-medium text-center p-4- `} >products</button>

                        <button onClick={() => {setSelectedType('cart')}} 
                         className = {`btn text-black ${selectedType === 'cart' ? 'bg-gradient-to-r from-[#7260fa] to-[#8906ed] text-white' : 'bg-white text-black' }
                           rounded-full  font-medium text-center p-4 border-none `} > cart( {countCard.length} ) </button>

                       </div>

               </div>

           
           {/* card  */}

           <div className='container mx-auto mt-10'>

            {
                 selectedType === 'Products' ?
                   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-3'>{allCards.map(card => <Card key={card.id} card={card} handleCards={handleCards} ></Card>)}</div>:
                    <div className='flex flex-col space-y-4'> {countCard.map((card,idx) => <Cart key={idx} card={card}></Cart> )} </div>
            }

          
  

           </div>


           
          



     </main>

    </>

  );
};

export default Cards;