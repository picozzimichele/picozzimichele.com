import React from "react"
import "../styles/BlogPost.css"
import BlogPage from "../components/BlogPage"
import ShareMenu from "../components/ShareMenu"
import { Helmet } from "react-helmet"

const BlogPost = () => {

    const titles = [{
        title: "Blog Title - Picozzi Michele",
        descriptionContent: "Blog Title Description goes here",
        image: "https://i.imgur.com/olLkHLg.jpg"
    }] 

    return (
        <div>
        <Helmet>
            {/* HTML Meta Tags */}
            <title>{titles.title}</title>
            <meta name="description" content={titles.descriptionContent} />
            <meta name="keywords" content="Monte Rosa,capanna margherita,Michele Picozzi, picozzimichele" />
            {/* Google Meta Tags */}
            <meta itemprop="name" content="Monte Rosa Michele Picozzi" />
            <meta itemprop="description" content={titles.descriptionContent} />
            <meta itemprop="image" content={titles.image} />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://picozzimichele.com/monterosa" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Monte Rosa Michele Picozzi" />
            <meta property="og:description" content={titles.descriptionContent} />
            <meta property="og:image" content={titles.image}  />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Monte Rosa Michele Picozzi" />
            <meta name="twitter:description" content={titles.descriptionContent} />
            <meta name="twitter:image" content={titles.image}  />
        </Helmet>
        <div className="middle">

            <h1 className="post-h1">H1 TITLE HERE</h1>
            
            <ShareMenu />

            <h2 className="post-h2">H2 TITLE HERE</h2>

            <div className="video-responsive">
                <iframe width="420" height="315" title="youtube video" src="https://www.youtube.com/embed/xHrB5pgw-TY" frameborder="0" allowfullscreen ></iframe>
            </div>

            <img className="img-p" src="https://imgur.com/ueqJhxv.jpg" alt="borderless" />

            <h3 className="post-h3">H3 TITLE HERE</h3>

            <p className="post-p">
            Paragraph here
            </p>

            <p className="post-p">
            <li>List 1</li>
            <br></br>
            <li>List 2</li>
            <br></br>
            <li>List 3</li>
            </p>

            <h3 className="post-h3">
            to follow more of my stories:
            </h3>
            <a className="link-p" href="https://www.instagram.com/picozzimichele" target="_blank" rel="noopener noreferrer">@picozzimichele</a>
            <div className="BlogPage">
                <h3> READ MORE BELOW </h3>
                <BlogPage />
            </div>
        </div>
        </div>
    )
}

export { BlogPost as default }


