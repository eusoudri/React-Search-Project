import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import RepoList from '../../components/RepoList';
import SortSelect from '../../components/SortSelect';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useUserContext } from '../../context/UserContext';
import SearchForm from '../../components/SearchForm';

function UserDetails() {
  const { username } = useParams<{ username: string }>();
  const {
    user,
    repos,
    error,
    loading,
    sortOrder,
    fetchUser,
    fetchUserRepos,
    setSortOrder,
  } = useUserContext();

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (username) {
      fetchUser(username);
      fetchUserRepos(username, sortOrder, 1);
    }
  }, [username, fetchUser, fetchUserRepos, sortOrder]);

  const loadMoreRepos = async () => {
    if (username && hasMore) {
      setLoadingMore(true);

      try {
        await fetchUserRepos(username, sortOrder, page + 1);
        setPage((prevPage) => prevPage + 1);
      } catch {
        setHasMore(false);
      } finally {
        setLoadingMore(false);
      }
    }
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    fetchUserRepos(username!, order, 1);
    setPage(1);
  };

  if (loading && page === 1) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="container">
      <Header title={`Detalhes do Usuário: ${username}`} />
      <div className="row mt-5">
        <div className="col-12 col-lg-3">
          {user && (
            <UserCard
              avatarUrl={user.avatar_url}
              followers={user.followers}
              following={user.following}
              email={user.email}
              bio={user.bio}
            />
          )}
        </div>
        <div className="col-12 col-lg-9">
          <div className="col-12 mx-auto mb-4 mt-4 mt-lg-0">
            <SearchForm />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Repositórios {user && <>{user.public_repos}</>}</h4>
            <SortSelect order={sortOrder} onChange={handleSortChange} />
          </div>
          <RepoList repos={repos} />
          {loadingMore && <div className="text-center">Carregando mais...</div>}
          {hasMore && !loadingMore && (
            <div className="text-center mt-4 mb-4">
              <button className="btn btn-primary" onClick={loadMoreRepos}>
                Carregar mais
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
