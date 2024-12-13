import { useState, FormEvent } from 'react';

interface SearchFormProps {
  onSearch: (username: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Digite o usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
