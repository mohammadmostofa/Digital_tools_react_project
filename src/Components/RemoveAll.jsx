import React from 'react';

const RemoveAll = ({ countCard,setCountCard}) => {

    const removeAll = () => {
        
     const remove = ([]);
       setCountCard(remove);
  }



  return (
    <div className='my-4'>
            
            {
              countCard.length !== 0  ?  <button onClick={()=> removeAll ()} className='btn btn-primary w-full'>process to checkout</button>:<button disabled className='hidden' >remove</button>      
 
            }
        
    </div>

        
  );
};

export default RemoveAll;