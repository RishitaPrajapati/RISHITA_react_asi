import React from "react";

function Mov2(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h3>Movie Name: BLACK PANTHER</h3>
                    </div>
                    <div className="card-body">
                        <p><b> Description:</b> {props.Description}</p>
                        {/* <p><b>Description:</b> Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt</p> */}
                    </div>
                    <div className="card-footer">
                        <a href="https://en.wikipedia.org/wiki/Black_Panther_(film)" className="btn btn-dark">READ MORE</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mov2