import { Repo } from '../../types/GitHub';
import RepoItem from '../RepoItem';

interface RepoListProps {
  repos: Repo[];
}

function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return <p>Nenhum repositório encontrado.</p>;
  }

  return (
    <section className="mt-3">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </section>
  );
}

export default RepoList;
