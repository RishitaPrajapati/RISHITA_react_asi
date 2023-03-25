import { useState } from "react";

function Exp() {

    const [number, setNumber] = useState(299)
    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        setNumber(number - 1)
    }

    const [pName, setProName] = useState('Maybelline Matte lipstick')

    const [des, setDes] = useState("Dress Your Lips in Maybelline New York's Colour Sensational Lip Colour for a Bold Look. These Hydrating Lip Colors Glide Smoothly & Keeps Your Lips Moisturized All Day Long. 35+ bold lipstick shades. Unique creamy texture. Non-drying matte finish")

    const [img, imgShow] = useState(true)

    function hideshow() {
        imgShow(false)
    }




    return (
        <>
            <div className="card">
                <div className="card-header">
                    {/* <img src="https://cdn.shopify.com/s/files/1/0595/1163/6120/products/9.jpg?v=1668152550&width=1445" className="w-25">
                    </img> */}

                    {img ? (
                        <img
                            src="https://cdn.shopify.com/s/files/1/0595/1163/6120/products/9.jpg?v=1668152550&width=1445"
                            className="w-25"
                        />
                    ) : null}
                </div>
                <div className="card-body">
                    <h1>product name: {pName}</h1>
                    <p>product description: {des}</p>
                    <p>product price: {number}</p>
                </div>
                <div className="card-footer">
                    <button onClick={() => increment()}>+</button>
                    <button onClick={() => decrement()}>-</button>
                </div>
                <div className="card-footer">
                    <button onClick={() => setProName('Maybelline Matte')}>name</button>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark">Buy Now</button>
                </div>
                <div className="card-footer">
                    <button onClick={() => imgShow(true)}>show</button>
                    <button onClick={() => imgShow(false)}>hide</button>
                    <button onClick={() => imgShow(!img)}>hide/show</button>
                </div>
            </div>
        </>
    )
}
export default Exp