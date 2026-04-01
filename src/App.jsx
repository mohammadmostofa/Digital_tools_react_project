
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import Information from './assets/Information/Information'
import Pricing from './assets/Pricing/Pricing'
import Footer from './assets/Footer/Footer'

// pricing fetch

 const fetchPricing = async () => {
    const res = await fetch('./Pricing.json')
    return res.json()
 }


//  call the fetchPrice
const fetchPricingPromise = fetchPricing()


// card 

const fetchCard = async () => {
  const res = await fetch('./product.json')
  return res.json()
}



const cardPromise = fetchCard();

function App() {
  
const [countCard, setCountCard] = useState([])


  const handleCards = (newCard) =>{
             
     setCountCard([...countCard,newCard])

  }
  

  return (

    
    <>
        
        <Navbar countCard={countCard}  ></Navbar>
        <Banner></Banner>
    
    <Suspense fallback = {<span className="loading loading-ring loading-sm"></span>} >
              <Cards cardPromise = {cardPromise} countCard={countCard} setCountCard={setCountCard} handleCards={handleCards}  ></Cards>
    </Suspense>


    <Information></Information>
   
    

    {/* Princing card */}

    <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>} >
        
                   <Pricing fetchPricingPromise={fetchPricingPromise} ></Pricing>
    </Suspense>

    
   <Footer ></Footer>


    </>
  )
}

export default App;
