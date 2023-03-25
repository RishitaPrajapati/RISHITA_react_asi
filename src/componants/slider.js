

function Slider() {

    let height = {
        height: '40vw',
        objectFit: 'cover'
    }

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." style={height} />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." style={height} />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." style={height} />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." style={height} />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/3907936/pexels-photo-3907936.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt='' style={height} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
export default Slider