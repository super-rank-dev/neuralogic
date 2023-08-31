const FeaturedServices = () => {
    return (
        <section id="featured-services">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 box">
                        <i className="bi bi-briefcase"></i>
                        <h4 className="title"><a href="">Lorem Ipsum Delino</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>

                    <div className="col-lg-4 box box-bg">
                        <i className="bi bi-card-checklist"></i>
                        <h4 className="title"><a href="">Dolor Sitema</a></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>

                    <div className="col-lg-4 box">
                        <i className="bi bi-binoculars"></i>
                        <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturedServices;