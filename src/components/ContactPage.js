import React from "react"
import "../styles/ContactPage.css"
import SocialMenu from "./SocialMenu"
import SubmissionForm from "./SubmissionFrom"

const ContactPage = () => {
    return (
        <div className="contact">
        
            <h1>Have an Idea. Will code.</h1>
            <div className="line"></div>
            <div><p className="bold">Direct email:</p><a href="mailto:michele.g.picozzi@gmail.com" className="email-link">michele.g.picozzi@gmail.com</a></div>
            <p className="bold">Happy to work on my spare time:</p>
            <p>
            If you are interested in collaborating on a project, I will do my best to
            accomodate you according to my schedule. I am currently working in Microsoft 
            and as a full stack developer. From react to node.js and jsx, with a little c# 
            if needed. Send me an idea and I will develope it!
            </p>
            <p>
            Also, happy to discuss if you want a print of one of my pictures.
            </p>
            <div className="line"></div>
            <SocialMenu />
            <SubmissionForm />
            <div className="line"></div>
            <div className="space" />
        </div>
    )
}


export { ContactPage as default }