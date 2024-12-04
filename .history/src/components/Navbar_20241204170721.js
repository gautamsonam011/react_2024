import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <>
            <nav classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="/">Navbar</a>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/" >{props.title}</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="/">Link</a>
                            </li>
                            <li classNameName="nav-item dropdown">
                                <a classNameName="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a classNameName="dropdown-item" href="/">Action</a></li>
                                    <li><a classNameName="dropdown-item" href="/">Another action</a></li>
                                    <li><hr classNameName="dropdown-divider" /></li>
                                    <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form classNameName="d-flex">
                            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button classNameName="btn btn-info" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                            <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                        </div>
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