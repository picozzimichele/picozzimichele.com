import React from "react"
import "../styles/AboutPage.css"
import Helmet from "react-helmet"

const AboutPage = () => {
    return (
        <div>
        <Helmet>

        {/* HTML Meta Tags */}
        <title>About - Picozzi Michele</title>
        <meta name="description" content="My name is Michele Picozzi and I am a front-end developer and photographer. I grew up in Milan, Italy and graduated in International Economics from Bocconi University. I've loved technology for as long as I can remember." />
        <meta name="keywords" content="Michele Picozzi,Picozzi Michele,Michele Picozzi about, picozzimichele blog" />
        
        {/* Google Meta Tags */}
        <meta itemprop="name" content="About - Picozzi Michele" />
        <meta itemprop="description" content="My name is Michele Picozzi and I am a front-end developer and photographer. I grew up in Milan, Italy and graduated in International Economics from Bocconi University. I've loved technology for as long as I can remember." />
        <meta itemprop="image" content="https://i.imgur.com/f16XTXj.jpg" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://picozzimichele.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - Picozzi Michele" />
        <meta property="og:description" content="My name is Michele Picozzi and I am a front-end developer and photographer. I grew up in Milan, Italy and graduated in International Economics from Bocconi University. I've loved technology for as long as I can remember." />
        <meta property="og:image" content="https://i.imgur.com/f16XTXj.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Picozzi Michele" />
        <meta name="twitter:description" content="My name is Michele Picozzi and I am a front-end developer and photographer. I grew up in Milan, Italy and graduated in International Economics from Bocconi University. I've loved technology for as long as I can remember." />
        <meta name="twitter:image" content="https://i.imgur.com/f16XTXj.jpg" />


        </Helmet>    
        <div className="row">
            <div className="column1">
            <img className= "img" src="https://i.imgur.com/ucSQuoJ.jpg" alt="Monte Rosa Michele Picozzi"></img>
            <img className= "img" src="https://i.imgur.com/2SQviNy.jpg" alt="snowboarding Michele Picozzi"></img>
            <img className= "img" src="https://i.imgur.com/f16XTXj.jpg" alt="surfing Michele Picozzi"></img>
            </div>
            <div className="column2">
                <div className="intro">
                <p>
                My name is Michele Picozzi and I am a front-end developer and photographer. 
                I grew up in Milan, Italy and graduated with a Bachelor’s degree in International  
                Economics from Bocconi University in 2015. I've loved technology for as long as I can remember. 
                </p>
                <p>
                My story is pretty much like every other kid that grew up in the 90s and early 00's: 
                Saturday morning cartoons, surf camps in the summer, snowboarding during winter, 
                homemade pasta, Japanese Anime, DC & Marvel Comics and Disney Afternoons. 
                Those early obsessions have influenced my work and life permanently.
                </p>
                <p>
                After I graduated college, I moved to Dublin, Ireland to start my career in Microsoft. 
                Since moving, I’ve worked in 3 different countries and 5 different teams until I became an Executive 
                in Tokyo, Japan where I have lived for over 3 years and learned Japanese. 
                </p>
                <p>
                Had a knack for coding and building things, that is why on the side I cultivated this passion learning 
                front end development with React, JSX and C# for Unity.
                </p>
                <p>
                I have been independent ever since.
                </p>
                <p>
                I am currently living in Tokyo and travel all over for work about 60% of the time.
                </p>
                </div>
            <div className="line"></div>
                <h1 className="h1">Client List</h1>
                <div className="list">
                    <p>Toyota</p>
                    <p>Luxottica</p>
                    <p>NTT</p>
                    <p>Unicredit</p>
                    <p>Eni S.p.a.</p>
                    <p>Prada</p>
                    <p>Ferrero</p>
                    <p>Hitachi</p>
                    <p>Fujitsu</p>
                    <p>Mitsubishi</p>
                    <p>Costa Crociere</p>
                    <p>Honda</p>
                    <p>Sony</p>
                    <p>Toshiba</p>
                    <p>Canon</p>
                    <p>Panasonic</p>
                </div>
            </div>
            <div className="column3"></div>
        </div>
        </div>
    )
}


export { AboutPage as default }



