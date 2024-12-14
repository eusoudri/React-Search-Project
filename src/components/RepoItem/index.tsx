import { Link } from 'react-router-dom';
import { Repo } from '../../types/GitHub';

interface RepoItemProps {
  repo: Repo;
}

function RepoItem({ repo }: RepoItemProps) {
  const { owner, name, stargazers_count } = repo;
  return (
    <div className="card mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <div>
        <h5>{name}</h5>
        <p>
          <strong>Estrelas:</strong> {stargazers_count}
        </p>
      </div>
      <Link
        to={`/repo/${owner.login}/${name}`}
        className="btn btn-sm btn-outline-primary"
      >
        Detalhes
      </Link>
    </div>
  );
}

export default RepoItem;
