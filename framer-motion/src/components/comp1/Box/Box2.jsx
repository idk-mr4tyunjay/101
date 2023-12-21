import { motion } from 'framer-motion'
import './box1.css'

const Box2 = () => {

  return (
    <div className="box-container">
        <motion.div 
        className="box"
        drag
        dragConstraints={{
            right: 20,
            top: 5
        }}
        whileHover={{
            scale: 1.1
        }}
        whileTap={{
            scale: 0.9
        }}
        >

        </motion.div>
    </div>
  )
}

export default Box2
