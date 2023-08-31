import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/portfolio' element={<Home />} />
                    <Route path='/about' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;