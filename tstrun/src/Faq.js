import React, { Fragment } from "react";
import Question from "./Questions";
import data from "./data";
import Header from "./Header";


class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <Fragment className="faqs">
      <Header /> 
      <div className="container container-fluid">
     
          
        <div className="row">
          <div className="col-sm-12">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="accordion">
              {this.state.data.map(item => (
                <Question
                  key={item.id}
                  title={item.title}
                  info={item.info}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default Faq;