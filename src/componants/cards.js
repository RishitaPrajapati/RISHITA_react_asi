function Cards() {
    return (
        <>
            <div className="d-flex p-3">
                <div className="card p-3 m-3" style={{ width: '300px', height: '450px' }}>
                    <img src="https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                    <div className="card-body" style={{ height: '700px' }}>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card p-3 m-3" style={{ width: '300px', height: '450px' }}>
                    <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content</p>
                    </div>
                </div>
                <div className="card p-3 m-3" style={{ width: '300px', height: '450px' }}>
                    <img src="https://images.pexels.com/photos/1690082/pexels-photo-1690082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards