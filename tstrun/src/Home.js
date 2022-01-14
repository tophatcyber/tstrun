import React from "react";
import Header from './Header';
import Bodytxt from './Bodytxt';
import Cards from './Cards';
import Footer from './Footer';
import Socials from './Socials';
import Contact from './Contact';
import About from './About';
import AboutBrian from "./AboutBrian"




class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <Bodytxt/>
                <Cards/>
                <Contact/>
                <Footer/>
                
               
                </div>

        )
    }
}

export default Home;