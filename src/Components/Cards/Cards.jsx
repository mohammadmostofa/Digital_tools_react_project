import React, { use, useState, } from 'react';
import Card from './Card';
import Cart from '../Cart';
import { ShoppingCart } from 'lucide-react';

const Cards = ({cardPromise,countCard,handleCards,setCountCard}) => {

  const allCards = use(cardPromise)

  const [selectedType, setSelectedType] = useState('Products')

  // hemovehandle

   const removeHadleBtn = () =>{
           countCard.fillter(items => items.id !== allCards.id)
           setCountCard(removeHadleBtn);
  }

  
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
                  
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-3 gap-4'>
                  {allCards.map(card => <Card key={card.id} card={card} handleCards={handleCards} countCard={countCard} ></Card>)}</div>:

                  
              
                 countCard.length !== 0 ?
                  <div className='flex flex-col space-y-4 gap-x-4'> 
                    {countCard.map((card,idx) => <Cart key={idx} card={card} countCard={countCard}  setCountCard={setCountCard} ></Cart> )} </div> : 
                      
                     <div className='container mx-auto bg-[rgba(255,255,255,0.94)]  my-10 border rounded-sm border-gray-300 shadow-accent-content p-4 '>

                               <div className=' flex  py-3'> <h2 className='text-black font-bold text-3xl'>Your Cart</h2></div>   
                            
                                   <div className='flex flex-col justify-center items-center py-15'>
                                           <ShoppingCart size={60} /> <br />
                                           <h2 className='font-bold text-gray-400'>Your Cart is empty</h2>
                                   </div>
                              
                  
                     </div>
              
              
            }

               
          
  

           </div>


           
          



     </main>

    </>

  );
};

export default Cards;