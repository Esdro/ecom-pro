import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {UserContext} from "../../context/User.context.jsx"
import {signOutUser} from "../../utils/firebase/firbase.utils";
export default function Navigation () {
    const {currentUser} = useContext(UserContext);


    async function signOutHandler() {
        await signOutUser();
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-lg">
                    <Link className="navbar-brand" to="/">La boutique 2-0 </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"   to={'/'}>Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/shop"}>La boutique</Link>
                            </li>
                            {
                                currentUser ?
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={signOutHandler}> Sign Out  </a>
                                    </li> : (
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/auth"}> Sign In / Register  </Link>
                                    </li>
                                )
                            }

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit"> Rechercher </button>
                        </form>
                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    )
}