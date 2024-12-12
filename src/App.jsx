import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import RepoDetails from './pages/RepoDetails';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
