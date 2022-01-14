import React, { Fragment } from 'react'
import Immge from'pics/download.png'
import './about.css'

class About extends React.Component{
constructor(props){
super(props)}
render(){
return(
<Fragment>
<div className="container-fluid">


       <img className="img-fluid" src={Immge}/>
        <div><h1>Newly debuted Russian hacking group Uppity Ursine hits Chicago Police department with ransomeware attacks
            targetting payroll servers, temporarily balancing the city of Chicago's budget</h1></div>

        
        <h2 className = "col-sm-12" style={{textAlign: left}}>"Mayor Lori Lightfoot state in a press conference that shre and
        the city of Chicago will not stand for this. That this is unlike anything the city of Chicago has ever experienced and that
        the MetaSploit server cluster located at 625 Belmont Ave does not host the Chicago police pension fund. </h2>

        <p style={{color:blue}}>This is demo content, and it shows.</p>

        <p>
        Hackers are demanding payment in exposure. Below is a PGP signed message from these most heinous of criminals
        </p>
       

        <p className = "text-center">   BEGIN PGP SIGNED MESSAGE and placeholder text</p>

        <h4 style={{textAlign: center}}>We are newly graduated group from federal University of Moscow

        <dd>unable to accept BTC, Eth, Monero, or SHIB. </dd>
        
        <dd>We ask only for exposure to grow our brand and get our name, Uppity Ursine, out there.</dd>
        <dd>Please fear us.</dd>
        </h4>
        <dl>
            <dt style={{fontWeight: bold}}>We asked  some experts on exposure.</dt>
            <dd> What exactly is exposure, and what can you do with it? How does it work? Is it decent?</dd>

            <dd>Our boundless commitment to free speech has been tested and proven over and over again.<br/>
                 If it is legal in Sweden, we will host it, and will keep it up regardless of any pressure to take it down.
            </dd>
            <dd>We have ZERO tolerance against SPAM and related services!</dd>
            <dt>Confidentiality</dt>
            <dd>We defend your integrity to the end.<br/>
                With our discreet customer relations <br/> policy we don't even have
                to know who you are, <br/> and if we do, we will keep that knowledge strictly confidential.</dd>
            <dt >Technical proficiency</dt>
            <dd>The PRQ team has a solid background in computer networking, security, hardware, and software. <br/>
                Most of us have been online for over 10 years. 
                We can assist you with almost anything - keeping your
                servers secure, or keeping your high-traffic websites up and running smoothly.
                To make this possible, we run our own fully multi-homed backbone network (AS33837),
                 with the capacity needed both to handle large DDoS attacks and to provide excellent connectivity to customers
                with bandwidth utilization ranging from a few Mbps to several hundred. Will PGP fit here?</dd>
        </dl>

</div>

</Fragment>


)}
}


export default About
