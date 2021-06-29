import React from "react";
import "./App.css";
import HeaderPicture from "../src/components/HeaderPicture"
import Navbar from "../src/components/Navbar"
import Line from "./components/Line"
import Footer from "./components/Footer"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage"
import HomePage from "./components/HomePage"
import BlogPage from "./components/BlogPage"
import ContactPage from "./components/ContactPage"
import ProjectsPage from "./components/ProjectsPage"
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";


/* BlogPages Import */

import Borderless from "./blogposts/Borderless"
import MonteRosa from "./blogposts/MonteRosa"
import PortugalSurf from "./blogposts/PortugalSurf"



const App = () => {
  return (
    <main>
    <Helmet>
      {/* HTML Meta Tags */}
      <title>Picozzi Michele Inc.</title>
      <meta name="description" content="Michele Picozzi's website is all about Photography, Adventure, Stories and much more.
      Join for the ride and follow along with my journey." />
      
      {/* Google Meta Tags */}
      <meta itemprop="name" content="Picozzi Michele Inc." />
      <meta itemprop="description" content="Michele Picozzi's website is all about Photography, Adventure, Stories and much more.
      Join for the ride and follow along with my journey." />
      <meta itemprop="image" content="https://i.imgur.com/ucSQuoJ.jpg" />
      
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://picozzimichele.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Picozzi Michele Inc." />
      <meta property="og:description" content="Michele Picozzi's website is all about Photography, Adventure, Stories and much more.
      Join for the ride and follow along with my journey." />
      <meta property="og:image" content="https://i.imgur.com/ucSQuoJ.jpg" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Picozzi Michele Inc." />
      <meta name="twitter:description" content="Michele Picozzi's website is all about Photography, Adventure, Stories and much more.
      Join for the ride and follow along with my journey." />
      <meta name="twitter:image" content="https://i.imgur.com/ucSQuoJ.jpg" />
    </Helmet>
    <Router>
    <div>
      <div className="main-div">
        <ScrollToTop />
        <HeaderPicture />
        <Navbar />
        <Line />
        <div className="content">
          <Switch>    
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/blog" component={BlogPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/projects" component={ProjectsPage}/>
            {/*BELOW POST SWITCH LINK*/}
            <Route exact path="/borderless" component={Borderless} />
            <Route exact path="/monterosa" component={MonteRosa} />
            <Route exact path="/portugalsurf" component={PortugalSurf} />
          </Switch>
        </div>
        <Line />
        <Footer />
      </div>
    </div>
    </Router>
    </main>
  );
}

export { App as default }
