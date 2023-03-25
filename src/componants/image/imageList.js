import React, { useState } from "react";
import img1 from "../ImageWithProps/images/img1.jpeg"
import img2 from "../ImageWithProps/images/img2.jpeg"
import img3 from "../ImageWithProps/images/img3.jpeg"
import img4 from "../ImageWithProps/images/img4.jpeg"
import img5 from "../ImageWithProps/images/img5.jpeg"
import img6 from "../ImageWithProps/images/img6.jpeg"
import Image from "./Image";



let pro = [
    {
        img: img1,
        title: "image 1"
    },
    {
        img: img2,
        title: "image 2"
    },
    {
        img: img3,
        title: "image 3"
    },
    {
        img: img4,
        title: "image 4"
    },
    {
        img: img5,
        title: "image 5"
    },
    {
        img: img6,
        title: "image 6"
    }
]

function ImageList() {
    const [image, setImage] = useState(pro)

    function Hide() {
        setImage([])
    }

    function Show() {
        setImage(pro)
    }

    return (
        <>
            <div className="container">
                <h1>IMAGES : {image.length}</h1>
                <div className="row justify-content-end my-3">
                    <button className="btn btn-dark col-2" onClick={Hide}>HIDE</button>
                    <button className="btn btn-dark col-2 ms-2" onClick={Show}>SHOW</button>
                </div>
                <div className="row">
                    {
                        image.map((item) => {
                            const { title, img } = item;
                            return <Image title={title} img={img} />
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default ImageList