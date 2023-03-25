import React from "react"

function Image(props) {

    const { img, title } = props


    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={img}
                        height="250px"
                    />
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Image