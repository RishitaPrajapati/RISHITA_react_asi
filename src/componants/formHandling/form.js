import { useState } from "react";

function Main() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [tableData, setTableData] = useState([])

    function FormHandle(event) {
        event.preventDefault()

        const formData = {
            first_name: firstName,
            last_name: lastName,
            city: city
        }

        setTableData([...tableData, formData])

        setFirstName("")
        setLastName("")
        setCity("")

        console.log()

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <form className="form-control py-5">
                            <label htmlFor="" className="p-3">FirstName: </label>
                            <input type="text" className="px-5 mx-3" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input><br />

                            <label htmlFor="" className="p-3">LastName: </label>
                            <input type="text" className="px-5 mx-3" value={lastName} onChange={(event) => setLastName(event.target.value)}></input><br />

                            <label htmlFor="" className="p-3">city: </label>
                            <input type="text" className="px-5 mx-3" value={city} onChange={(event) => setCity(event.target.value)}></input><br />
                            <button className="btn btn-dark" onClick={FormHandle}>ADD</button>
                        </form>
                    </div>


                    <div className="col-md-8 my-5">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((item, index) => {
                                        const { first_name, last_name, city } = item
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{first_name}</td>
                                                <td>{last_name}</td>
                                                <td>{city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Main