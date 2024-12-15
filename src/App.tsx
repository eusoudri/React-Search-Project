import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
import './styles/global.scss';
import './styles/variables.scss';
import './styles/theme.scss';

const UserDetails = lazy(() => import('./pages/UserDetails'));
const RepoDetails = lazy(() => import('./pages/RepoDetails'));

function App() {
  return (
    <main className="bg">
      <UserProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<UserDetails />} />
              <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
            </Routes>
          </Suspense>
        </Router>
      </UserProvider>
    </main>
  );
}

export default App;
