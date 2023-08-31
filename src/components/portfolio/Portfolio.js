const Portfolio = () => {
    return (
        <section id="portfolio" className="section-bg">
            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h3 className="section-title">Our Portfolio</h3>
                </header>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className=" col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">App 1</a></h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/web3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 3"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Web 3</a></h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/app2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 2"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">App 2</a></h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/card2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 2"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Card 2</a></h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/web2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 2"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Web 2</a></h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/app3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 3"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">App 3</a></h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/card1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 1"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Card 1</a></h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/card3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 3"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Card 3</a></h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/web1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 1"><i className="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Web 1</a></h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Portfolio;