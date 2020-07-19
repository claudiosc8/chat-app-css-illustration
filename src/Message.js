import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion"

const Message = ({children, active, className}) => {

    const [typing, setTyping] = useState(active)

    useEffect(() => {
      if(typing === true) {
        setTimeout(function(){ setTyping(false) }, 1000 );
      }
    }, [typing])

   
   if(typing) {
    return <div 
    className={`typing ${className}`}
    >
    <span></span><span></span><span></span>
    </div>
   } else {
    return children
   }


}

export default Message;
