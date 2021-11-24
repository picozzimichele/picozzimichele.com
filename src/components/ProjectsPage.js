import React from "react"
import "../styles/ProjectPage.css"

const ProjectPage = () => {

    const projects = [
        {
            link: "https://netflix-50f2b.web.app/",
            text: "Netflix Clone",
            src: "/images/netflix-clone.jpg"
        },
        {
            link: "https://airbnb-clone-ten-omega.vercel.app/",
            text: "Airbnb Style Website",
            src: "/images/airbnb.jpg"
        },
        {
            link: "/",
            text: "Personal Website",
            src: "/images/picozzimichele.jpg"
        },
        {
            link: "https://picozzimichele.itch.io/doodle-jump-picozzimichele",
            text: "Doodle Jump Unity",
            src: "/images/doodlejump.jpg"
        },
        {
            link: "https://social-sdk-237d6.web.app/",
            text: "Photo Sharing App",
            src: "/images/instagram.png"
        },
        {
            link: "https://pathfinder-afc48.web.app/",
            text: "A*Star Pathfinding algorithm",
            src: "/images/pathfinder.jpg"
        },
        {
            link: "https://picozzimichele.itch.io/dungeon-vania",
            text: "Dungeon Vania Platformer",
            src: "/images/redvania.jpg"
        },
        {
            link: "https://github.com/picozzimichele/blockchain-react",
            text: "Full-stack Blockchain",
            src: "/images/blockchain.jpg"
        },
        {
            link: "https://crowd-coin-peach.vercel.app/",
            text: "Ethereum Crowdfunding Platform",
            src: "/images/crowdcoin.jpg"
        },
    ]

    return (
        <div className="wrapper">
            { projects.map( project => 
                (  
                    <a className="link-project" href={project.link} key={project.link} target="_blank">
                        <div className="container-project">
                            <div className="image-wrapper">
                                <img className= "image-project" alt="Avatar" src={project.src} />
                            </div>
                            <div className="footer">
                                <p className="text-footer">{project.text}</p>
                            </div>
                        </div>
                    </a>
                )
            )}
        </div>
    )
}


export { ProjectPage as default }