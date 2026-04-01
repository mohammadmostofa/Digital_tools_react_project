import React from 'react';

const RemoveAll = ({removeAll}) => {


  return (
    <div className='flex justify-center items-center'>
             <button onClick={()=> removeAll()} className='btn btn-primary w-full'>  process to checkout </button>
    </div>
  );
};

export default RemoveAll;