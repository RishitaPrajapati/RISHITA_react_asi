import React from "react";

function Mov3(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h3>Movie Name: SPIDER MAN</h3>
                    </div>
                    <div className="card-body">
                        <p><b> Description:</b> Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko</p>
                    </div>
                    <div className="card-footer">
                        <a href={props.link} className="btn btn-dark">READ MORE</a>
                        {/* <a href="https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home" className="btn btn-dark">READ MORE</a>*/}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mov3