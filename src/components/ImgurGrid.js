import React from "react"
import "../styles/ImageGrid.css"
import { motion } from "framer-motion"
import LazyLoad from "react-lazyload"

const ImgurGrid = ({ setSelectedImg }) => {

    const picList = [
        {
            url: "https://i.imgur.com/SCgU2ai.jpg",
            name: "Korea Soldier"
        },
        {
            url: "https://i.imgur.com/QvUSqi7.jpg" ,
            name: "Hanami Back"
        },
        {
            url: "https://i.imgur.com/Xtsx8El.jpg",
            name: "Korea Soldier full"
        },
        {
            url: "https://i.imgur.com/Q78SXDj.jpg",
            name: "Lizard Side"
        },
        {
            url:"https://i.imgur.com/zCEN69N.jpg" ,
            name:"Sumo Full"
        },
        {
            url: "https://i.imgur.com/mrVbtiR.jpg",
            name: "https://i.imgur.com/d37oN0Y.jpg"
        },
        {
            url: "https://i.imgur.com/ignqnzO.jpg",
            name: "Dragon Kyoto"
        },
        {
            url: "https://i.imgur.com/RQqpCoZ.jpg",
            name: "Gundam Full"
        },
        {
            url: "https://i.imgur.com/ohUTM9r.jpg",
            name: "Korea Palace"
        },
        {
            url: "https://i.imgur.com/xzzrIrg.jpg",
            name: "Sumo singol Full"
        },
        {
            url: "https://i.imgur.com/Ap6AmYd.jpg",
            name: "Sumo practice"
        },
        {
            url:"https://i.imgur.com/PtvjDHJ.jpg",
            name:"Red Man Full"
        },
        {
            url: "https://i.imgur.com/2aBj7uM.jpg",
            name: "Hanami River"
        },
        {
            url:"https://i.imgur.com/l2YPNbz.jpg" ,
            name:"Kyoto Temple inside Full"
        },
        {
            url: "https://i.imgur.com/JMvW3T7.jpg",
            name: "Hanami River 2"
        },
        {
            url: "https://i.imgur.com/GHc4m9n.jpg",
            name: "Sake Shop"
        },
        {
            url: "https://i.imgur.com/Rxu6oaX.jpg",
            name: "Red Temple Dog"
        },
        {
            url: "https://i.imgur.com/AeEVv1v.jpg",
            name: "Old Man metro"
        },
        {
            url: "https://i.imgur.com/NVlExLf.jpg",
            name: "Old man bike"
        },
        {
            url: "https://i.imgur.com/izBHryf.jpg",
            name: "Mirror Bills"
        },
        {
            url: "https://i.imgur.com/EjvVfSO.jpg",
            name: "Nara side blue"
        },
        {
            url:"https://i.imgur.com/pzQxsWF.jpg",
            name:"Kyoto Street Full"
        },
        {
            url: "https://i.imgur.com/8Vm6HKN.jpg",
            name: "Nara main view"
        },
        {
            url: "https://i.imgur.com/3FDwbYH.jpg",
            name: "Copenhagen"
        },
        {
            url:"https://i.imgur.com/jXn80T5.jpg" ,
            name:"Kyoto Temple Full"
        },
        {
            url: "https://i.imgur.com/RA8jDdr.jpg",
            name: "Asakusa side"
        },
        {
            url:"https://i.imgur.com/HyFJYn8.jpg" ,
            name:"Fishing Sant diego"
        },
        {
            url:"https://i.imgur.com/4WeKxcM.jpg" ,
            name:"Festival one Full"
        },
        {
            url:"https://i.imgur.com/ikhd4RP.jpg" ,
            name:"St Diego city"
        },
        {
            url:"https://i.imgur.com/hejnNRn.jpg" ,
            name:"Temple Kyoto"
        },
        {
            url:"https://i.imgur.com/qvGrCcJ.jpg" ,
            name:"Mt Takao Full"
        },
        {
            url:"https://i.imgur.com/XW09cqv.jpg" ,
            name:"Hanami Full"
        },
        {
            url:"https://i.imgur.com/1nN0zPu.jpg" ,
            name:"Purple Night Full"
        },
        {
            url:"https://i.imgur.com/u5XKB24.jpg" ,
            name:"Cophen Water"
        },
        {
            url:"https://i.imgur.com/Chf5m4b.jpg" ,
            name:"Festival 2"
        }
    ]

    const Spinner = () => (

        <div className="post-loading">
            <h5>Loading...</h5>
        </div>
    )

    

    return (

        <div className="img-grid-container">
            {picList && picList.map(pic => (
                <LazyLoad height={200} offset={100} once={true} key={pic.url} placeholder={<Spinner />}>
                    <motion.div className="img-wrap-box" key={pic.url}
                    layout
                    whileHover={{ opacity: 0.7 }}
                    onClick={() => setSelectedImg(pic.url)}
                    >
                    <motion.img src={pic.url} alt={pic.name}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.3}}
                    />
                    </motion.div>
                </LazyLoad>
            ))}
                
        </div>
    )
}

export { ImgurGrid as default }