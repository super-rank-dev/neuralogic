import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;