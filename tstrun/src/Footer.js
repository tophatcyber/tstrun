import React from 'react'



class Footer extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row chini">
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-8 footer">
                        
                            <div className="row footertxt"> 
                
                                <a  href="https://www.w3schools.com/%22%3EVisit Evil nonsense W3Schools"
                                    id="fineprint">PRQ, Box 1092, S-172 22 Sundbyberg / info@prq.se </a>   
                
                                <a  href="https://www.w3schools.com/%22%3EVisit Evil nonsense W3Schools"
                                    id="fineprint">TinyHats, Cube 1092, S-172 22 Sweden / money@tinyhats.se</a>
                
                                
                                <a id="back-to-top" href="#" className="btn btn-light btn-lg back-to-top" role="button"><i className="fas fa-chevron-up"></i></a> 
                            </div>
                
                
                                <ul className="btms">
                           
                                    <li>  
                                        <a href="https://www.eff.org/br%22%3E">
                                            <img src="https://www.prq.se/pics/brstrip.gif" alt="[Join the Blue Ribbon online free speech campaign]" className="img-fluid"/>
                                        </a>
                                    </li>  
                                    <li> 
                                        <a href="https://www.dataretentionisnosolution.com/%22%3E">
                                            <img src="https://www.prq.se/pics/dataretention.gif" alt="[Data Retention is no solution]" className="img-fluid"/>
                                        </a>
                                    </li> 
                                    <li> 
                                        <a href="https://www.paypalsucks.com/%22%3E">
                                            <img src="https://www.prq.se/pics/PayPalSucksLogo100.jpg" alt="paypal sucks" className="img-fluid"/>
                                        </a>
                                    </li>
                                </ul>
                                
                          
                        
                    </div>
                    
                </div>
        )
    }
}

export default Footer