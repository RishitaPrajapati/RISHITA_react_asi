import React from "react";

function Mov1(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        {/* <h3>Movie Name: IRON MAN</h3> */}
                        <h3>Movie Name: {props.moviename}</h3>
                    </div>
                    <div className="card-body">
                        <p><b> Description:</b> Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount ...</p>
                    </div>
                    <div className="card-footer">
                        <a href="https://en.wikipedia.org/wiki/Iron_Man" className="btn btn-dark">READ MORE</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mov1