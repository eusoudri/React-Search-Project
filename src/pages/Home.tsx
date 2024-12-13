import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

function Home() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = (username: string) => {
    if (username && username.trim() !== '') {
      navigate(`/user/${username}`);
    } else {
      setError('Digite um nome de usuário válido.');
    }
  };

  return (
    <div className="container my-4">
      <Header title="GitHub Repos Viewer" />
      <SearchForm onSearch={handleSearch} />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
}

export default Home;
