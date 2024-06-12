import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav classNameName="navbar navbar-expand-lg bg-body-tertiary container mb-2">
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="#" >SIT</a>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#">Link</a>
                            </li>

                        </ul>
                        <form classNameName="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="s witch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

