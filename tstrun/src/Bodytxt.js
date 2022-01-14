import React from "react";




class Bodytxt extends React.Component {
    constructor(props) {
        super(props);


    }

    render()
    {
        return(
            <div className="row no-gutters"> 
            <div className="col-sm-12 body-texts">

                <h1>Welcome to PRQ!</h1>

                <p>This is demo content.</p>

                <p>
                    We are a specialized hosting provider, located in Sweden, a free-speech haven.<br/> We serve a
                    growing
                    community of international clients with special needs.
                </p>
                <h2>What we do</h2>

                <p className="text-center"> These are words I made words.</p>



                <h4>PRQ is globally known for:</h4>
                <dl className="col-sm-12"> 
                    <dt>Refugee hosting</dt> 
                    <dd>Our boundless commitment to free speech has been tested and proven over and over again.<br/>
                        If it is legal in Sweden, we will host it, and will keep it up regardless of any pressure to
                        take it
                        down.
                    </dd> 
                    <dd>We have ZERO tolerance against SPAM and related services!</dd>
                    <dt>Confidentiality</dt>
                    <dd>We defend your integrity to the end.<br/>
                        With our discreet customer relations <br/> policy we don't even have
                        to know who you are, <br/> and if we do, we will keep that knowledge strictly confidential.</dd>
                    <dt>Technical proficiency</dt>
                    <dd>The PRQ team has a solid background in computer networking, security, hardware, and software.
                        <br/>
                        Most of us have been online for over 10 years. <br/>
                        We can assist you with almost anything - keeping your
                        servers secure, or keeping your high-traffic websites up and running smoothly.<br/>
                        To make this possible, we run our own fully multi-homed backbone network (AS33837),
                        with the capacity needed both to handle large DDoS attacks<br/> and to provide excellent
                        connectivity to
                        customers
                        with bandwidth utilization ranging from a few Mbps to several hundred.
                    </dd>
                </dl>








            </div> 

        </div> 

            


        )
    }

}


export default Bodytxt