import React from 'react'
import PropTypes from 'prop-types';
// import { 
//     Link
//   } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" >{props.title}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/abouts">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px'}} onClick={() => {props.toggleMode('primary')}}></div>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

// Navbar.PropTypes = PropTypes.string

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here"
}  