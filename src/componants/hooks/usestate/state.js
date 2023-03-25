import { useState } from "react";

function Stateall() {

    // string
    const [ownerName, setOwnerName] = useState('risi')

    // object
    const [product, setProduct] = useState({
        productName: 'tweety',
        description: 'abcdefghijklmnopqrstuvwxyz',
        price: 11111
    })

    // number
    const [number, setNumber] = useState(0)

    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        //  for minus value
        // setNumber(number - 1)

        // if else
        // if (number == 0) {
        //     setNumber(number)
        // }
        // else {
        //     setNumber(number - 1)
        // }

        // tarnary operator condition
        number == 0 ? setNumber(number) : setNumber(number - 1)
    }

    // array
    const [array, setArray] = useState([
        'panda',
        'doremon',
        'tom n jerry',
        'rudra'
    ])

    // boolean

    // add remove btn
    const [add_remove, set_add_remove] = useState(false)

    function click() {
        set_add_remove(!add_remove)
    }

    // image

    const [img, showImg] = useState(false)


    // theme change

    const [darkmode, setDarkMode] = useState(false)
    function changeclr() {
        setDarkMode(!darkmode)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-10">

                    <div className="card">
                        <div className={`${darkmode ? 'bg-dark text-white' : 'bg-'}`}>

                            <div className="card-header">
                                {/* boolean */}

                                {
                                    img ? <img src="https://tse2.mm.bing.net/th?id=OIP.Q4Z0VnMpCL7yS3WhqASnYgHaLa&pid=Api&P=0" className="w-25" /> : null
                                }

                            </div>

                            <button className={`btn ${img ? "btn-warning" : "btn-success"} w-25 border-2`} onClick={() => showImg(!img)}>
                                {
                                    img ? 'Hide' : 'show'
                                }
                            </button>
                            <hr></hr>
                            <div className="card-body">
                                {/* string */}
                                <h1>owner Name: {ownerName}</h1>
                                <hr></hr>
                                {/* object */}
                                <h5>product NAME: {product.productName}</h5>
                                <h6>description: {product.description}</h6>
                                <h5>price:  {product.price}</h5>
                                <hr></hr>
                                {/* number */}
                                <div>
                                    <p>quantity: {number}</p>
                                    <button onClick={increment}>+</button>
                                    <button onClick={decrement}>-</button>
                                </div>
                                <hr></hr>
                                {/* array */}
                                <div>
                                    <p>product-1 : {array[0]}</p>
                                    <p>product-2 : {array[1]}</p>
                                    <p>product-3 : {array[2]}</p>
                                    <p>product-4 : {array[3]}</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                {/* boolean */}
                                <button className={`btn ${add_remove ? " btn-danger" : " btn-primary"}`} onClick={click}>
                                    {
                                        add_remove ? 'REMOVE' : "ADD"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-2">
                    <button className={`btn ${darkmode ? 'bg-white text-dark' : 'bg-dark text-white'}`} onClick={changeclr} >
                        {
                            darkmode ? 'light-mode' : 'dark-mode'
                        }
                    </button>
                </div>

            </div>


        </>
    )

}

export default Stateall