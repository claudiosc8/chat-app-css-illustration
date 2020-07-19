import React from 'react';
import Smartphone from './Smartphone'
import './App.scss';

const App = () => {
   return (

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Smartphone />
            </div>
            <div className='col vertical-center'>
              <h1>Simple booking</h1>
              <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
            </div>
          </div>
        </div>
    ) 
}

export default App;
