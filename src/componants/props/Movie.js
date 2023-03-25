import React from "react";

function Movie(props) {

    const { id, moviename, description, link, image, watchMovie } = props

    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <img src={image} className="w-100" />
                    </div>
                    <div className="card-header">
                        <h3>Movie Name: {moviename}</h3>
                    </div>
                    <div className="card-body">
                        <p><b> Description:</b> {description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={link} className="btn btn-dark">READ MORE</a>
                        <button className="btn btn-dark ms-3" onClick={() => watchMovie(moviename)}>watchlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie