import React from "react";

function movie1(props) {
    return (
        <>

            <div className="col-md-3">
                <div className="card h-100">
                    <div className="card-body p-3">
                        {/* <h3>movie name: kantara</h3>
                        <p>
                            In 1847, there lived a king that had a great kingdom as well
                            as a lovin g wife and child, but could not find peace. He sets
                            out on a journey
                        </p> */}
                        <h3>movie name: {props.moviename}</h3>
                        <p>descrption: {props.description}</p>
                    </div>
                    <div className="p-3 m-auto">
                        <a href={props.link} className="btn btn-dark">More Details</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default movie1