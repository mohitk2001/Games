import React from 'react'
import {Link} from "react-router-dom"
function Header() {

    const Style={
        background:"url('https://media.istockphoto.com/vectors/space-stars-background-vector-illustration-of-the-night-sky-vector-id606667670?k=6&m=606667670&s=170667a&w=0&h=R5ubyk-M5HCt2oedWdnOFU4F01XWvXEt9jOuIiMsrlk=')",
        backgroundPosition: 'center',
        backgroundSize:"cover"
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={Style}>
                <Link className="navbar-brand" to="/">GAME ZONE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                       
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Header
