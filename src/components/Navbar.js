import React from 'react'

export default function Navbar(props) {
    const { title, price, toogglemode, mode } = props;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{price}</a>
                        </li>

                        <li className="nav-item">
                            <a href="/" className="nav-link ">About Us</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onChange={toogglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode? 'Disable': 'Enable'} Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
