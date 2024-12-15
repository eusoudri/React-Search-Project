import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useUserContext } from '../../context/UserContext';

function RepoDetails() {
  const { owner, repo } = useParams<{ owner: string; repo: string }>();
  const { repoDetails, loading, error, fetchRepoDetails } = useUserContext();

  useEffect(() => {
    if (owner && repo) {
      fetchRepoDetails(owner, repo);
    }
  }, [owner, repo, fetchRepoDetails]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <Header title={`Detalhes do Repositório: ${owner}/${repo}`} />
      {repoDetails && (
        <div className="card mt-4 p-3">
          <h3>{repoDetails.name}</h3>
          <p>{repoDetails.description}</p>
          <p>
            <strong>Estrelas:</strong> {repoDetails.stargazers_count}
          </p>
          <p>
            <strong>Linguagem:</strong> {repoDetails.language}
          </p>
          <a
            href={repoDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ir para o Repositório no GitHub
          </a>
          <Link to={`/user/${owner}`} className="btn btn-secondary ms-2">
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
}

export default RepoDetails;
