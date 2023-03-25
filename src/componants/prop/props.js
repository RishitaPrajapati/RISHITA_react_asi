import React, { useState } from "react";
import Movie1 from "./movie1";
import Movie2 from "./movie2";
import Movie3 from "./movie3";
import Movie4 from "./movie4";

function movie() {

    const [movieData, setMovieDta] = useState(movielist)


    return (
        <>

            <div className="container">
                <h3 className="text-center mt-3">Top 4 Movies</h3>
                <div className="row mt-5">

                    {
                        movieData.map((item) => {
                            return { movielist }
                        })
                    }


                    {/* <Movie1 moviename="RRR" description="RRR [a] is a 2022 Indian Telugu -language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DV" link="https://en.wikipedia.org/wiki/RRR_(film)
                " />
                    <Movie2 />
                    <Movie3 />
                    <Movie4 /> */}
                </div>
            </div>


        </>
    )
}

export default movie




