const OurClients = () => {
    return (
        <section id="clients">
            <div className="container" data-aos="zoom-in">

                <header className="section-header">
                    <h3>Our Clients</h3>
                </header>

                <div className="clients-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    );
}

export default OurClients;