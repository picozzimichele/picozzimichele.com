import React from "react"
import "../styles/BlogPost.css"
import BlogPage from "../components/BlogPage"
import ShareMenu from "../components/ShareMenu"
import { Helmet } from "react-helmet"

const Borderless = () => {
    return (
        <div>
        <Helmet>
            {/* HTML Meta Tags */}
            <title>Borderless Tokyo - Picozzi Michele</title>
            <meta name="description" content="Experience teamLab Borderless, Tokyo Japan | チームラボ ボーダレス お台場
            The website is all about Photography, Adventure, Stories and much more." />
            <meta name="keywords" content="borderless,tokyo borderless,Michele Picozzi, picozzimichele" />
            
            {/* Google Meta Tags */}
            <meta itemprop="name" content="Borderless Tokyo - Picozzi Michele " />
            <meta itemprop="description" content="Experience teamLab Borderless, Tokyo Japan | チームラボ ボーダレス お台場
            The website is all about Photography, Adventure, Stories and much more." />
            <meta itemprop="image" content="https://imgur.com/ueqJhxv.jpg" />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://picozzimichele.com/borderless" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Borderless Tokyo - Picozzi Michele " />
            <meta property="og:description" content="Experience teamLab Borderless, Tokyo Japan | チームラボ ボーダレス お台場
            The website is all about Photography, Adventure, Stories and much more." />
            <meta property="og:image" content="https://imgur.com/ueqJhxv.jpg" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Borderless Tokyo - Picozzi Michele " />
            <meta name="twitter:description" content="Experience teamLab Borderless, Tokyo Japan | チームラボ ボーダレス お台場

            The website is all about Photography, Adventure, Stories and much more." />
            <meta name="twitter:image" content="https://imgur.com/ueqJhxv.jpg" />
        </Helmet>  
        <div className="middle">
            <h1 className="post-h1">Experience teamLab Borderless, Tokyo Japan | チームラボ ボーダレス お台場</h1>
            <ShareMenu />
            <h2 className="post-h2">EXPERIENCE ART</h2>
            <p className="post-p">
            TeamLab has been holding art exhibitions in different parts of Japan since it was founded in 2001, 
            but their first-ever permanent exhibition was launched in June 2018 in Odaiba, Tokyo.
            </p>
            <div className="video-responsive">
                <iframe width="420" height="315" title="borderless" src="https://www.youtube.com/embed/xHrB5pgw-TY" frameborder="0" allowfullscreen></iframe>
            </div>
            <p className="post-p">
            The exhibition is called teamLab Borderless, in partnership with Mori Building, and aims to transcend boundaries between art and people. チームラボ ボーダレス お台場
            The exhibition holds a collection of different artworks that seem to have no end and no boundary, each transitioning seamlessly into the next.
            It is housed within a 10,000-sqm building and contains about 50 digital artworks divided into five zones. Which one was your favourite area?
            </p>
            <h2 className="post-h2">Borderless World</h2>
            <p className="post-p">
            The first zone that welcomes people inside teamLab Borderless is called the Borderless World, a place that echoes the fantastical world of nature. Lights, 
            flowers, and streams react to the presence of people, making the zone amazingly immersive.
            </p>
            <img className="img-p" src="https://imgur.com/ueqJhxv.jpg" alt="borderless" />
            <h2 className="post-h2">Athletics Forest</h2>
            <p className="post-p">
            Dubbed by teamLab as a “creative physical space,” the Athletics Forest encourages three-dimensional exploration through the body. There are different 
            physical challenges like 3D light bouldering, galactic trampoline, and aerial climbing.
            </p>
            <h2 className="post-h2">Future Park</h2>
            <p className="post-p">Specially made for children, Future Park is an educational zone that fosters creativity. 
            There is an area called Sketch Aquarium, where kids get to color ocean creatures and bring them 
            to life through a digital scanner that releases their artwork into the digital world.
            </p>
            <h2 className="post-h2">Forest of Lamps</h2>
            <p className="post-p">The Forest of Lamps is the most popular among the five zones due to its fairy-tale setting. 
            The room is filled with countless lamps that react to a person’s presence. When you stand close to a lamp, colorful 
            light spreads through the nearby lamps. The presence of other people makes it even more colorful.
            </p>
            <h2 className="post-h2">EN Tea House</h2>
            <p className="post-p">The magical experience won’t leave you even as you drink your tea at the EN Tea House! The tea house 
            is dark except for the lights that radiate on every person’s table. Flowers bloom and move in your teacup as if they have a life of their own!
            </p>
            <h2 className="post-h2">Ideal budget</h2>
            <p className="post-p">Tickets prices are as follows:
            ■ Adults — 3,200 yen
            Reservation is recommended.
            For the EN Tea House, 500 yen for hot and cold teas.
            </p>
            <div className="BlogPage">
                <h3> READ MORE BELOW </h3>
                <BlogPage />
            </div>
        </div>
        </div>
    )
}

export { Borderless as default }