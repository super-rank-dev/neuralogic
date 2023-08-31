import FeaturedServices from './FeaturedServices';
import About from '../about/About';
import Services from './Services';
import CallToAction from './CallToAction';
import Skills from './Skills';
import Facts from './Facts';
import Portfolio from '../portfolio/Portfolio';
import OurClients from './OurClients';
import Testiminals from './Testiminals';
import Team from './Team';
import Contact from './Contact';

const Main = () => {
    return (
        <main>
            <FeaturedServices />
            <About />
            <Services />
            <CallToAction />
            <Skills />
            <Facts />
            <Portfolio />
            <OurClients />
            <Testiminals />
            <Team />
            <Contact />
        </main>
    );
}

export default Main;