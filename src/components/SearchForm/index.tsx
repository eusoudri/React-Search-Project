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
  );
}

export default SearchForm;
