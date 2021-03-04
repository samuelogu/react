export default function Footer() {
    return (
        <>
            <div className="site-newsletter">
                <div className="container">
                    <div className="text-center">
                        <h3 className="h4 mb-2">Subscribe to our newsletter</h3>
                        <p className="text-muted">Join our monthly newsletter and never miss out on new stories and
                            promotions.</p>

                        <div className="row">
                            <div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 ml-auto mr-auto">
                                <div className="input-group mb-3 mt-3">
                                    <input type="text" className="form-control" placeholder="Email address" aria-label="Email address" />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Subscribe</button>
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-instagram">
                <div className="action">
                    <a className="btn btn-light" href="#">
                        Follow us @ Instagram
                    </a>
                </div>
                <div className="row no-gutters">
                    <div className="col-sm-6">
                        <div className="row no-gutters">
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/1.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/2.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/3.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/4.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row no-gutters">
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/5.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/6.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/7.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-3">
                                <a className="photo" href="#">
                                    <img className="img-fluid" src="img/instagram/8.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="site-footer bg-darkest">
                <div className="container">

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Privacy policy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Terms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Feedback</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Advertise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="page-contact.html">Contact</a>
                        </li>
                    </ul>
                    <div className="copy">
                        &copy; Milo 2019<br/>
                        All rights reserved
                    </div>
                </div>
            </footer>
        </>
    )
}
