import React from 'react';
import Chat from './Chat'

const smartphone = () => {



   return (
        <div className='smartphone'>
          <div className='header'>
            <div className='arrow'></div>
            <div className='avatar'></div>
            <div className='info'>
              <div className='name'>Samuel Green</div>
              <div className='status'>Available to Walk</div>
            </div>
            <div className='options'></div>
          </div>
          <Chat />
          <div className='typing-area'>
            <div className='input'>
              Type a message...
              <div className='button'>
                <div className='icon'></div>
              </div>
            </div>
          </div>
        </div>
    ) 
}

export default smartphone;
