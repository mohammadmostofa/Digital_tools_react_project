import React, { use } from 'react';
import PricingCards from './PricingCards';

const Pricing = ({fetchPricingPromise}) => {
     const  pricingCard = use(fetchPricingPromise)
              
  return (
    <div className=' container mx-auto grid  grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-3 md:justify-between items-center  gap-4 py-10 my-20'>

           {
            pricingCard.map((card,index) => <PricingCards key={index}  card={card}  >  </PricingCards> )
           }
             
    </div>
  );
};

export default Pricing;