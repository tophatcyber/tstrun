import React from "react";
import {BrowserRouter as Router,  Link} from "react-router-dom";
import Faq from "./Faq";
import About from "./About";
import AboutBrian from "./AboutBrian";






class Header extends React.Component{
    constructor(props){
        super(props)

        this.openSideDrawer = this.openSideDrawer.bind(this)
        this.closeSideDrawer = this.closeSideDrawer.bind(this)


}

//functions go between the closing tag (braces } ) of the contructor, and the start of the render function

openSideDrawer() {
    document.getElementById("side-drawer").style.left = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
}
closeSideDrawer() {
    document.getElementById("side-drawer").style.left = "-336px";
    document.getElementById("side-drawer-void").classList.add("d-none");
    document.getElementById("side-drawer-void").classList.remove("d-block");
}




render(){
    return(
        <div className="row heads"> 
            <div className="col-sm-3"> 
                <button className="menu"  type="button" onClick={this.openSideDrawer}> 
                    <i className="fas fa-bars"></i>
                </button>

            </div>
            <div className="col-sm-6">
                <ul className="topmenu ">




                    <li>
                        |
                        <Link to="/">START</Link> 
                        |
                    </li> 

                    <li><Link to="/faqs">About Us</Link>  
                        |
                    </li>

                    <li>
                        <div className="dropdown">  
                            <button className="dropbtn">Dropdown</button>
                            <div className="dropdown-content">
                                <Link to="/aboutbrian">Brian</Link>
                                <Link to="/about" >Terry</Link>
                                <Link to="/faqs">Link 3</Link>
                            </div>
                        </div>
                        |
                    </li>



                    <li><Link to="/faqs">Faqs</Link>
                        |
                    </li>

                    <li><Link to="/faqs" >Order</Link> 
                        |
                    </li>

                    <li> <Link to="/faqs" >Contact us</Link> 
                        |
                    </li>

                    <li> <Link to="/faqsnested" > NestedFAQ </Link> 
                        |
                    </li>

                </ul>

            </div>
            <div className="col-sm-3 drp"> 
                <div className="dropdown"> 
                    <button className="dropbtn">Dropdown</button> 
                    <div className="dropdown-content drp2"> 
                        <Link to="/aboutbrian">Brian</Link> 
                        <Link to="/about">Terry</Link>
                        <Link to="/faqs">Link 3</Link>
                    </div>
                </div>
            </div> 
                
           
            <div id="side-drawer" className="position-fixed">
                <div className="h-100 bg-white">
                   
                    <div className="p-4 bg-dark">
                        <Link to="/faqs" >
                            <h1 className="text-white">Home</h1>
                        </Link>
                    </div>
                 
                    <ul id="links" className="list-group" onClick={this.closeSideDrawer}>
                        <Link to='/faqs' id="link-structure" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Start</Link>
                        <a id="link-css" 
                            className="list-group-item list-group-item-action border-0 rounded-0">News</a>
                        <a id="link-javascript" 
                            className="list-group-item list-group-item-action border-0 rounded-0">.Net</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page2</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page3</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0 active">Close Sidebar</a>


                    </ul>
                </div> 
            </div> 
          
        </div> 
    )
}
}


export default Header