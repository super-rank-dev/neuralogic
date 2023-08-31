const Facts = () => {
    return (
        <section id="facts">
            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h3>Facts</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </header>

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Hours Of Support</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="38" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Hard Workers</p>
                    </div>

                </div>

                <div className="facts-img">
                    <img src="assets/img/facts-img.png" alt="" className="img-fluid" />
                </div>

            </div>
        </section>
    );
};

export default Facts;