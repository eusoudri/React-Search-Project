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
    <section className="container">
      <Header title={`Detalhes do Repositório: ${owner}/${repo}`} />
      {repoDetails && (
        <>
          <div className="row">
            <div className="col-4">
              <Link to={`/user/${owner}`}>
                <i className="bi bi-box-arrow-in-left"></i>
                Voltar
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="card col-12 col-lg-6 mt-4 p-3">
              <h3>{repoDetails.name}</h3>
              <p>{repoDetails.description}</p>
              <hr />
              <p>
                <strong>
                  <i className="bi bi-star"></i>
                </strong>{' '}
                {repoDetails.stargazers_count}
              </p>
              {repoDetails.language && (
                <p>
                  <strong>Linguagem:</strong> {repoDetails.language}
                </p>
              )}
            </div>

            <div className="col-12 col-lg-6 mt-4 mt-lg-2 px-lg-4 d-flex align-items-end justify-content-center justify-content-lg-start">
              <a
                href={repoDetails.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ir para o Repositório no GitHub
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default RepoDetails;
