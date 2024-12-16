import { Link } from 'react-router-dom';
import { Repo } from '../../types/GitHub';
import { formatDate } from '../../utils/dateFormatter';
import '../../styles/global.scss';
import './styles.scss';

interface RepoItemProps {
  repo: Repo;
}

function RepoItem({ repo }: RepoItemProps) {
  const { owner, name, stargazers_count, visibility, forks, updated_at } = repo;
  return (
    <li className="card mb-3 p-4 d-flex flex-row justify-content-between align-items-center details">
      <div>
        <h5>
          {name}
          <span>{visibility}</span>
        </h5>
        <div className="d-flex">
          <p data-toggle="tooltip" data-placement="top" title="Estrelas">
            <span>
              <i className="bi bi-star"></i>
            </span>
            {stargazers_count}
          </p>
          <p
            data-toggle="tooltip"
            data-placement="top"
            title="Forks"
            className="mx-3"
          >
            <span>
              <i className="bi bi-bezier2"></i>
            </span>
            {forks}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-info">
            Última atualização:
            {formatDate(updated_at)}
          </p>
        </div>
      </div>
      <Link
        to={`/repo/${owner.login}/${name}`}
        className="btn btn-sm btn-outline-primary"
      >
        Detalhes
      </Link>
    </li>
  );
}

export default RepoItem;
