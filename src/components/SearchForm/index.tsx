import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
  onError?: (message: string | null) => void;
}

function SearchForm({ onError }: SearchFormProps) {
  const [username, setUsername] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username.trim() !== '') {
      setLocalError(null); 
      if (onError) onError(null); 
      navigate(`/user/${username}`); 
    } else {
      const errorMessage = 'Digite um nome de usuário válido.';
      setLocalError(errorMessage); 
      if (onError) onError(errorMessage); 
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch"
      >
        <input
          type="text"
          className="form-control form-control-md me-2 p-2"
          placeholder="Digite o usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="mt-3 mt-lg-0 btn btn-primary">
          Buscar
        </button>
      </form>
      {localError && !onError && (
        <div className="alert alert-danger mt-2 w-100">{localError}</div>
      )}
    </>
  );
}

export default SearchForm;
