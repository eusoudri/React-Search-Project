import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import RepoList from '../../components/RepoList';
import SortSelect from '../../components/SortSelect';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SearchForm from '../../components/SearchForm';
import { useUserContext } from '../../context/UserContext';

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
    setRepos,
  } = useUserContext();

  useEffect(() => {
    if (username) {
      fetchUser(username);
      fetchUserRepos(username, 'desc');
    }
  }, [username, fetchUser, fetchUserRepos]);

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    const sorted = [...repos].sort((a, b) => {
      return order === 'asc'
        ? a.stargazers_count - b.stargazers_count
        : b.stargazers_count - a.stargazers_count;
    });
    setRepos(sorted);
  };

  if (loading) return <Loading />;
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
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
