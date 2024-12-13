import { Repo } from '../types/GitHub';
import RepoItem from './RepoItem';

interface RepoListProps {
  repos: Repo[];
}

function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return <p>Nenhum repositório encontrado.</p>;
  }

  return (
    <div className="mt-3">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;
