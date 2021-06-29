import React from "react"
import "../styles/Footer.css"

const SocialMenu = () => {
    return (
            <div className="social-menu">
                <ul>
                    <li><a href="https://twitter.com/picomichele" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/picozzimichele/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCjROxdBVoa244tB2MQa59KA?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/picozzimichele/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
    )
}

export { SocialMenu as default }