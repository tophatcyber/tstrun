import React, { Fragment } from "react";
import axios from 'axios'
import Socials from "./Socials";


class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.resetForm = this.resetForm.bind(this)

    }
    onNameChange(event){
        this.setState({name: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})

    }
    onMessageChange(event){
        this.setState({message: event.target.value})
    }
    resetForm(){
        return this.setState({
        name: '',
        email: '',
        message: ''

})

    }


    handleSubmit(e) {
        e.preventDefault();

        axios({
          method: "POST",
          url:"/api/mail",
          data:  this.state
        }).then((response)=>{
            console.log(response);
          if (response.data['success'] === true) {
            alert("Message Sent.");
            this.resetForm()
          } else  {
            alert("Message failed to send.")
          }
        })
      }



    render(){
        return(
            <Fragment>
                <h1> Contact us</h1>
                <div className="container">
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange}/>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
<Socials/>
            </div>
            
            </Fragment>
            
        )
    }


}

export default Contact;