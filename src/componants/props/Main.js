import React, { useState } from "react";
import Mov1 from "./Mov1";
import Mov2 from "./Mov2";
import Mov3 from "./Mov3";
import { Movielist } from "./Movielist";
import Movie from "./Movie";

function Main() {

    const [MovieData, setMovieData] = useState(Movielist)

    const [selectMovie, setSelectMovie] = useState([])

    function watchMovie(singleMovie) {
        setSelectMovie([...selectMovie, singleMovie])
        // console.log(singleMovie)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="text-center my-5">TOP 3 Movies</h1>
                        <div className="row">

                            {
                                MovieData.map((item) => {
                                    const { id, moviename, description, image, link } = item
                                    return <Movie
                                        key={id}
                                        moviename={moviename}
                                        description={description}
                                        link={link}
                                        image={image}
                                        watchMovie={watchMovie}
                                    />
                                })
                            }





                            {/* 1st = we create three another components like(Mov1,Mov2,Mov3) and then we export those and import here using props
                    <Mov1/>
                    <Mov2/>
                    <Mov3/>
                    */}

                            {/* 2nd = we change another components data from Main file using props like this:

                    example
                        <Mov1 moviename="IRON MAN-2" />
                        <Mov2 description="change description"/>
                        <Mov3 link= "change link here"/>   
                        
                    original data of card change

                        <Mov1 moviename="IRON MAN-2" />
                        <Mov2 Description="using props change movie description here like this way" />
                        <Mov3 link="https://en.wikipedia.org/wiki/Doctor_Strange_in_the_Multiverse_of_Madness" />


                    */}

                            {/* distructure data 

                    <Movie moviename="IRON MAN-2" description="i am changed description1" />
                    <Movie moviename="IRON MAN-3" description="i am changed description2" />
                    <Movie moviename="IRON MAN-4" description="i am changed description3" />
                    */}







                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="list-group">
                            {
                                selectMovie.map((item, index) => {
                                    return (
                                        <li className="list-group-item" key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <Mov1 />
            <Mov2 />
            <Mov3 /> */}
        </>
    )
}

export default Main