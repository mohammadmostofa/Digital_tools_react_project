import { Check } from "lucide-react";
import React from "react";
const PricingCards = ({card}) => {


    const priceCards = card
  return (
    <div className= {` h-120 relative border border-gray-300 shadow-2xl py-14 px-4 rounded-2xl ${priceCards.isPopular ? 'bg-gradient-to-r from-[#7260fa] to-[#8906ed] text-white':'bg-[rgba(207,207,207,0.67)]' } `} >
                     { priceCards.isPopular === true ? <h1 className="absolute -top-5 left-[37%] font-bold rounded-full bg-amber-300 text-black p-4  ">Most Popular</h1> :'' }
                <div className='space-y-5  '>

                    <h1 className="font-bold text-2xl"> {priceCards.name} </h1>
                    <p className="text-md"> {priceCards.description} </p>
                    <h3 className="font-bold text-black text-2xl"> {priceCards.price} </h3>
                    {
                      priceCards.features.map((feature,index) => <li className='list-none flex items-center pt-4'  key={index} feature={feature}> {  priceCards.isPopular === true ? <Check className="text-white"></Check>: <Check className="text-green-400"></Check> } {feature} </li> )

                    }

                    <div className='mt-5'>
                        <button className='btn w-full ' > {priceCards.buttonText} </button>
                    </div>


                </div>
    </div>
  );
};

export default PricingCards;