import React from 'react';
import '../styles/preloader.css';
const Preload = () => {
    return (
       <div className='preloader'>
           <div className="lds-default">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
           </div>
       </div>
    );
};

export default Preload;