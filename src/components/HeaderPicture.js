import React from "react"
import "../styles/HeaderPicture.css"

const HeaderPicture = () => {
    return (
        <div className="header">
                <a href="/">
                    <img className="headerPic" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="header shot round"/>
                </a>
        </div>
    )
}

export { HeaderPicture as default }

/* {process.env.PUBLIC_URL + '/black.jpeg'} */