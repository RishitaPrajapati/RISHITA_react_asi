import { useContext } from "react";
import { cocktailwrapper } from "../NewApps";

function Header() {

    const { drinkName, setDrinkName } = useContext(cocktailwrapper)

    return (
        <>
            <nav className="navbar bg-bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        risi
                    </a>
                    <form className="d-flex" role="search">
                        <input className="form-control" value={drinkName} type="search" placeholder="search" aria-label="search" onChange={(e) => setDrinkName(e.target.value)} />
                        <button className="btn btn-dark" type="submit">search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header