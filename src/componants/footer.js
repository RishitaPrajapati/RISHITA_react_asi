import '../componants/footer.css'

function Footer() {
    return (
        <>
            <div>
                &lt;&gt;
                <section className="contact-area" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="contact-content text-center">
                                    <a href="#" className='risi'>RISI</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                                    <div className="hr" />
                                    <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Surat.</h6>
                                    <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                                    <div className="contact-social">
                                        <ul>
                                            <li><a className="hover-target" href><i className="fab fa-facebook-f" /></a></li>
                                            <li><a className="hover-target" href><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a className="hover-target" href><i className="fab fa-github" /></a></li>
                                            <li><a className="hover-target" href><i className="fab fa-behance" /></a></li>
                                            <li><a className="hover-target" href><i className="fab fa-pinterest-p" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <p>Copyright © 2023 All Rights Reserved.</p>
                </footer>

            </div>
        </>
    )
}
export default Footer