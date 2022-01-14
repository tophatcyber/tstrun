import React, { Fragment } from 'react'
import './about.css'


class About extends React.Component{
constructor(props){
super(props)}
render(){
return(
<Fragment>
<div className="container-fluid">



        <div><h1>Bio:</h1></div>

        
        <h2>"I work too much" -Terry </h2>

        <p>This is demo content, and it shows.</p>

        <p>
            Terry is a specialist in general studies, and is located in Sweden, a free-speech haven. He serves a growing
            community of international clients with special needs such as you. If he talks down to you he will be punished.
        </p>
        <h3 >What he does:</h3>

        <p >   Eats my food, and downvotes my posts on reddit. Terry if you are reading this, I know.</p>

        <h4>Terry is globally known for:</h4>
        <dl>
            <dt>I was not aware that he was globally known.</dt>
            <dd> Below is filler text until the important stuff</dd>
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
