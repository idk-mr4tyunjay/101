import {useState} from 'react'
import { motion } from 'framer-motion'
import './box1.css'

const Box1 = () => {

    const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
        <motion.div 
        className="box"
        animate={{
            x: isAnimating ? 1100 : 0,
            opacity: isAnimating ? 1 : 0.5,
            backgroundColor: "blue",
            // scale: 2,
            rotate: isAnimating ? 360 : 0
        }}
        initial={{
            opacity: 0.5
        }}
        transition={{
            type: "spring",
            // duration: 2
            stiffness: 50,
            damping: 7
        }}
        onClick={() => setIsAnimating(!isAnimating)}
        >

        </motion.div>
    </div>
  )
}

export default Box1
