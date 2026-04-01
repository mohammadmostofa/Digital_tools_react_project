import React, { use } from 'react';
import PricingCards from './PricingCards';

const Pricing = ({fetchPricingPromise}) => {
     const  pricingCard = use(fetchPricingPromise)
     console.log(pricingCard)
              
  return (
    <div className=' container mx-auto grid grid-cols-3 justify-between items-center  gap-4 py-10 my-20'>

           {
            pricingCard.map((card,index) => <PricingCards key={index}  card={card}  >  </PricingCards> )
           }
             
    </div>
  );
};

export default Pricing;