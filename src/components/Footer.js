import React from "react"
import SocialMenu from "./SocialMenu"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="box">
                <div className="margin">
                    <h1>Subscribe</h1>
                    <p className="signup">Sign up to receive periodic info about new print releases and projects.</p>
                    <label><input type="email" placeholder="Email Address" className="email" /></label>
                    <label><input type="submit" className="email-button" value="SIGN UP"></input></label>
                    <p className="privacy">Your privacy will be respected.</p>
                </div>
            </div>
            <div>
                <p className="copyright">© {new Date().getFullYear()} picozzimichele. All rights reserved.</p>
            </div>
            <SocialMenu />
        </div>
    )
}

export { Footer as default }