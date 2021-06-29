import React from "react"
import { Link } from "react-router-dom";
import "../styles/BlogPage.css"

const BlogPage = () => {

    const articles = [
        {
            link: "/borderless",
            text: "teamLab Borderless",
            src: "https://imgur.com/ueqJhxv.jpg"
        },
        {
            link: "/monterosa",
            text: "Climbing Monte Rosa",
            src: "https://i.imgur.com/olLkHLg.jpg"
        },
        {
            link: "/portugalsurf",
            text: "Portugal’s Best Surf Spots",
            src: "https://i.imgur.com/ZS7FT1D.jpg"
        },
    ]

    return (
        <div className="whole">
            { articles.map( article => 
                (<Link to={article.link} key={article.link}>
                    <div className="container">
                        <img className= "image-blog" alt="Avatar" src={article.src} />
                        <div className="overlay">
                            <div className="text">{article.text}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}



export { BlogPage as default }

/* 
scrollToTop(() => {
  window.scrollTo(0, 0)
}, [])
*/