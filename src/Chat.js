
import React, {useState, useEffect} from 'react';
import Conversation from './Conversation'
import Message from './Message'
import { motion } from "framer-motion"

const Chat = () => {

    const [limit, setLimit] = useState(0)

    useEffect(() => {
      if(limit < Conversation.length) {
        setTimeout(function(){ setLimit(el => el+1) }, Conversation[limit].delay*1000);
      }
    }, [limit])

    const getMessage = (message) => {

        if (message.type === 'text') { return message.text}
        else if (message.type === 'image') {return <React.Fragment>{message.images.map((image, index) => <div className='image-wrapper' key={index}><img src={image} alt='chat-message' /></div>)}</React.Fragment>}
        else if (message.type === 'option') {return <React.Fragment><div className='radio'></div>{message.text}<div className='price'>{message.price}</div></React.Fragment>}

    }

   return (

         <div className='chat-area'>

            {
              Conversation.slice(0, limit).map((message, i) => {

                return ( 
                  <Message key={i} active={message.type === 'text'} className={message.from}>
                    <motion.div 
                      className={`message ${message.from} ${message.type}${Conversation[i+1] && Conversation[i+1].from === message.from ? '' : ' last-in-a-row'}`}
                      animate={{scale: 1, opacity:1}}
                      initial={{scale: 0, opacity:0}}
                      transition={{type: "spring", stiffness: 300, damping: 50}}
                      positionTransition
                    >
                      {getMessage(message)}
                    </motion.div>
                  </Message>
                    )
              })
            }

          </div>
    ) 
}

export default Chat;



