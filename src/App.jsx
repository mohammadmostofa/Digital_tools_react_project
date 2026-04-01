
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'




// card 

const fetchCard = async () => {
  const res = await fetch('/product.json')
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
              <Cards cardPromise = {cardPromise} countCard={countCard} setCountCard={setCountCard} handleCards={handleCards} ></Cards>
    </Suspense>

    



    </>
  )
}

export default App
