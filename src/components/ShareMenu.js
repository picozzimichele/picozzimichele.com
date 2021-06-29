import "../styles/ShareMenu.css"
import React, { useEffect, useRef } from "react"

const ShareMenu = () => {

    const btnRefTwitter = useRef()
    const btnRefReddit = useRef()
    const btnRefFacebook = useRef()
    const btnRefLinkedin = useRef()
    const btnRefWhatsapp = useRef()

    let postUrl = encodeURI(window.location.href);
    let postTitle = encodeURI("Hi everyone, please check this story out")

    useEffect(() => {

        btnRefTwitter.current.setAttribute(
            "href", 
            `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
        )
        btnRefReddit.current.setAttribute(
            "href", 
            `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`
        );
        btnRefFacebook.current.setAttribute(
            "href", 
            `https://www.facebook.com/sharer.php?u=${postUrl}`
        );
        btnRefLinkedin.current.setAttribute(
            "href", 
            `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
        );
        btnRefWhatsapp.current.setAttribute(
            "href", 
            `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
        );


    })

    return (
        <div className="share-btn-container">
            <a href="#" ref={btnRefTwitter} className="twitter-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="#" ref={btnRefReddit} className="pinterest-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-reddit"></i>
            </a>   
            <a href="#" ref={btnRefFacebook} className="facebook-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square"></i>
            </a>                    
            <a href="#" ref={btnRefLinkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" ref={btnRefWhatsapp} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp"></i>
            </a>
        </div>
    )

}

/*

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
 
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
 
Linkedin:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Whatsapp:
https://api.whatsapp.com/send?text=[post-title] [post-url]


*/

export { ShareMenu as default }