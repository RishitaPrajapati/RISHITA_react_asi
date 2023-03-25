import { useState } from "react"

function Card() {

    const [productName, setProductName] = useState("panda")
    const [changeName, setChangeName] = useState('risi')
    const [number, setNumber] = useState(0)
    const [image, setImage] = useState(false)
    const [person, changeData] = useState({
        firstName: 'risi',
        birthYear: 1997,
        hobby: 'photography'
    })

    function increment() {
        setNumber(number + 1)
    }

    function decrement() {
        setNumber(number - 1)
    }

    function showImage() {
        setImage(true)
    }


    function personChange() {
        changeData({
            ...person,
            firstName: 'ris',
            birthYear: 2000,
            hobby: 'reading'
        })
    }

    return (
        <>

            <div className="card">
                <img src="https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=" className="w-25"></img>
                <div className="card-body">
                    <h5 className="card-title">product name:  {productName}</h5>
                    <h5 className="card-title">change name:  {changeName}</h5>
                    <p>NUMBER : {number}</p>

                    {/* object */}
                    <p>person name:{person.firstName} </p>
                    <p>person dob:{person.birthYear}</p>
                    <p>person hobby:{person.hobby}</p>
                    <button onClick={personChange}>object</button>


                    <button onClick={() => setProductName('cutepanda')}>product name</button>
                    <button onClick={() => setChangeName('ris')}>change name</button>
                    <button onClick={() => increment()}>+</button>
                    <button onClick={() => decrement()}>-</button>
                    <button onClick={() => setImage(false)}>hide</button>
                    <button onClick={() => setImage(true)}>show</button>

                </div>
            </div>
        </>
    )
}
export default Card