import React from "react"
import "../styles/Modal.css"
import { motion } from "framer-motion"

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop")) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{ y: "0" }}
                animate={{ y: "0" }}
            />
        </motion.div>
    )
}

export { Modal as default }