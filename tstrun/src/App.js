import React, { Fragment } from 'react';

import Faqs from './Faq';
import Questions from './Questions';
import Home from './Home';
import About from './About';
import AboutBrian from './AboutBrian';
import FAQnested from './FAQnested';

import{BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return ( 
    
      
       
        
         <Router>
           <Routes>
       
        <Route exact path="/faqs"   element={<Faqs /> } /> 
        <Route exact path="/"   element={<Home /> } />
        <Route exact path="/questions"   element={<Questions/>} />
        <Route exact path="/about"    element={<About/> } />
        <Route exact path="/aboutbrian"    element={<AboutBrian/> }  />
        <Route exact path="/faqsnested"   element={<FAQnested/> }    />
        
       </Routes>
        </Router>
      
    
    )
  }
}

export default App;
