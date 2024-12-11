import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import RepoDetails from './pages/RepoDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:username" element={<UserDetails />} />
                <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
