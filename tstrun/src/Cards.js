import React from "react";
import Pixa from './pixa.jpg'



class Cards extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="row no-gutters col-sm-12">
                <div className="col-sm-6">
                    <div className="card mb-3" href="#" type="button">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={Pixa} className="card-img img-fluid" alt="..." />
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-6">
                    <div className="row col-sm-12">
                        <div className="col-sm-6">
                            <div className="card mb-3" href="#" type="button">
                                <div className="row no-gutters">
                                
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-6  row">
                            <div className="card mb-3" href="#" type="button">
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                    <img src={Pixa} className="card-img img-fluid" alt="..." />
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row col-sm-12  mbili">
                            <div className="col-sm-6">
                                <div className="card mb-3" href="#" type="button">
                                    <div className="row no-gutters">
                                        
                                        <div className="col-md-12">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.
                                                </p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                    ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-6 row ">
                                <div className="card mb-3" href="#">
                                    <div className="row no-gutters">
                                        <div className="col-md-5">
                                        <img src={Pixa} className="card-img img-fluid" alt="..." />
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit longer.
                                            </p>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.
                                                </p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                    ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )


    }
}

export default Cards