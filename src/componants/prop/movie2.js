import React from "react";

function movie2() {
    return (
        <>

            <div className="col-md-3">
                <div className="card h-100">
                    {/* <div className="card-header text-center">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.3GByvYL1xTT391g_RRpVNAHaLH&pid=Api&rs=1&c=1&qlt=95&w=75&h=112"
                                    className="w-75"
                                />
                            </div> */}
                    <div className="card-body p-3">
                        <h3>movie name: Iron man</h3>
                        <p>
                            Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name.Produced by Marvel Studios and distributed by Paramount Pictures.
                        </p>
                    </div>
                    <div className="p-3 m-auto">
                        <button className="btn btn-dark">More Details</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default movie2