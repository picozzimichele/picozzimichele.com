import React from "react"
import useFirestore from "../hooks/useFirestore"
import "../styles/ImageGrid.css"
import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore("images")
    console.log(docs)

    return (

        <div className="img-grid-container">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap-box" key={doc.id}
                    layout
                    whileHover={{ opacity: 0.7 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded" 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export { ImageGrid as default }