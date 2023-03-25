function Header() {

    let Header_bg = {
        backgroundColor: 'black',

    }
    let text_clr = {
        color: 'white'
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid p-2" style={Header_bg}>
                <a className="navbar-brand" href="#" style={text_clr}>RISI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={text_clr}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={text_clr}>Services</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={text_clr}>
                                pages
                            </a>
                            <ul className="dropdown-menu" style={text_clr}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>blog page</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}> landing page</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}> image page</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}> cosmetic page</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={text_clr}>Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-border-white" type="submit" style={text_clr}>Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
export default Header