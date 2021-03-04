import { NavLink } from "react-router-dom";
import AddPost from "./AddPost";

export default function Header() {

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if(!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
                    <div className="container">

                        <button className="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse"
                                data-target=".navbar-collapse" aria-controls="navbar-left navbar-right" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" isActive={checkActive} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:;" id="dropdown03" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">Categories</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown03">
                                        <a className="dropdown-item" href="doc-alerts.html">Alerts</a>
                                        <a className="dropdown-item" href="doc-buttons.html">Buttons</a>
                                        <a className="dropdown-item" href="doc-cards.html">Cards</a>
                                        <a className="dropdown-item" href="doc-forms.html">Forms</a>
                                        <a className="dropdown-item" href="doc-icons.html">Icons</a>
                                        <a className="dropdown-item" href="doc-pagination.html">Pagination</a>
                                        <a className="dropdown-item" href="doc-tables.html">Tables</a>
                                        <a className="dropdown-item" href="doc-typography.html">Typography</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <NavLink className="navbar-brand mx-auto order-1 order-md-3" to="/">Milø</NavLink>

                        <div className="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <AddPost />
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
