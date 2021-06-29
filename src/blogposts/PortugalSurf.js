import React from "react"
import "../styles/BlogPost.css"
import BlogPage from "../components/BlogPage"
import ShareMenu from "../components/ShareMenu"
import { Helmet } from "react-helmet"

const PortugalSurf = () => {

    const titles = [{
        title: "Portugal’s Best Surf Spots - Picozzi Michele",
        descriptionContent: "Blog Title Description goes here",
        image: "https://i.imgur.com/ZS7FT1D.jpg"
    }] 

    return (
        <div>
        <Helmet>
            {/* HTML Meta Tags */}
            <title>{titles.title}</title>
            <meta name="description" content={titles.descriptionContent} />
            <meta name="keywords" content="Portugal's best surf spot,top surf spot Portugal,Michele Picozzi, picozzimichele, Praia dos Coxos, Vale Figueiras, Sagres, Praia de Almagreira, Peniche" />
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

            <h1 className="post-h1">Portugal’s Best Surf Spots</h1>
            
            <ShareMenu />

            <br />
            <br />
            <br />

            <p className="post-p">
            I have been traveling around Portugal by car this year for about 1 month in July and an additional 3 weeks in September/October.
            </p>
            <p className="post-p">
            I can confidently say that I have experienced enough of the famous surf spots to have an idea of my favourites.
            </p>
            <p className="post-p">
            So without further due, lets jump in the final list. I am assuming you will be most likely have access to a car, if not some of these spots might be hard to reach.
            </p>
            <p className="post-p">
            If you travel to Lisbon airport and need to rent a car the price is really cheap. I got a fiat 500 for 7€ a day by booking online with Europcar (of course basic insurance and basic everything) but for my 5,10" board that is all I needed.
            </p>
            <p className="post-p" style={{fontStyle: "italic"}}>
            To be clear I do prefer less crowded spots than famous but full of people. During a good day at Supertubos for instance you could have more than 50 people in the water, some great surfers but others just get in the way of a good wave.
            </p>
            <h2 className="post-h2">Praia da Consolação left (close to Supertubos)</h2>
            <img className="img-p" src="https://i.imgur.com/Ps3qk2S.jpg" alt="Praia da Consolação 2" />

            <p className="post-p">
            This is my favorite Surf Spot in Peniche, while to get in the water is a little bit tricky, you can see the rocky parts here, only few locals dare to get in.
            </p>
            <p className="post-p">
            When it gets the right condition this spot creates a long constant right wave which allows you to surf one of the longest waves I have found in Portugal.
            </p>
            <p className="post-p">
            Definitely not a beginner spot, I have seen few people get dents in their boards and one person completely destroy one, but once you get the hang of it (how to enter and exit from the rocks) it will surely become one of your favorite spots as well.
            </p>
            <img className="img-p" src="https://i.imgur.com/VRt9vUe.jpg" alt="Praia da Consolação" />     
            <p className="post-p">
            I cannot stress this enough, sometimes Supertubos is flat and full of people and Consolação is pumping perfectly, this makes one of the best surf spot in Portugal.
            </p>
            <h2 className="post-h2">Praia dos Coxos, Ericeira</h2>
            <img className="img-p" src="https://i.imgur.com/jyQYL6U.jpg" alt="Praia dos Coxos, Ericeira" />
            <p className="post-p">
            It is usually fairly crowded, but I found the locals to be very chill and friendly so that has never been a problem.
            </p>
            <p className="post-p">
            To be honest I never had any issues with Portuguese people while surfing but cannot guarantee that it will be the same for all people.
            </p>
            <p className="post-p">
            Pronounced Ko-shus, is considered by the vast majority of Portuguese to be one of Portugal’s best surf spots.
            </p>
            <p className="post-p">
            This beach tends to be best in low tide, and creates another wonderful right wave. In good condition has barrels, however I was never fortunate enough to see them.
            </p>
            <p className="post-p">
            Regardless the surf was fun and up to all levels as you will find breaks from beginner to expert.
            </p> 
            <h2 className="post-h2">Praia de Almagreira, Peniche</h2>
            <img className="img-p" src="https://i.imgur.com/eAht1IH.jpg" alt="Praia de Almagreira, Peniche" /> 
            <p className="post-p">
            This spot is somewhat special. You will need a car to get there as it is off-road for a little, but the drive is 100% worth it. If you are travelling with a camper Van, Almagreira goes automatically on the top of my list of Portugal’s best surf spot.
            </p> 
            <p className="post-p">
            Never too crowded and with lots of break points (you can find different spots just by walking up and down the coast)
            </p> 
            <p className="post-p">
            The beach is wide and there are almost no rocks while surfing, which makes it a great spot for beginners as well.
            </p> 
            <p className="post-p">
            The waves are not constant, very dependant on swell and tide, but I always had lots of fun in this place. Being able to catch one wave after the other and paddle until you can no longer feel your arms makes Almagreira an amazing surf spot.
            </p> 
            <p className="post-p">
            Also very recommended to enjoy the sunset with a couple of friends and a beer in your hand. By far my favorite sunset spot.
            </p>  
            <h2 className="post-h2">Vale Figueiras, Sagres</h2>
            <img className="img-p" src="https://i.imgur.com/ZS7FT1D.jpg" alt="Vale Figueiras, Sagres" />
            <p className="post-p">
            If you are heading south of Portugal, visit Lagos. The city is great, however not much surf going on there. The closest option is to drive around 1 hour to Sagres and you will find many spots (check magic seaweed for recommendations).
            </p>
            <p className="post-p">
            By far the most beautiful surf spots can be found around the south coast of Portugal and the picture here brings very little justice to the place.
            </p>  
            <p className="post-p">
            Praia de Vale Figueiras is a very quiet and peaceful beach. There are few visitors, even in the height of summer. This is partly because of the fact that the beach can only be accessed via a dirt road.
            </p>  
            <p className="post-p">
            And partly because the beach is less known than other beaches nearby, such as Praia da Bordeira or Praia da Arrifana. This makes it a good place to escape the crowds. Most of the visitors to this beach are actually surfers.
            </p>  
            <p className="post-p">
            Let me know if you have any other recommendation an in the meanwhile happy wave!”
            </p>
            <img className="img-p" src="https://i.imgur.com/f16XTXj.jpg" alt="surfing Michele Picozzi" />


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

export { PortugalSurf as default }
