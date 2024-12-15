import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard/UserCard';
import RepoList from '../../components/RepoList';
import SortSelect from '../../components/SortSelect';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
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
    <div className="container">
      <Header title={`Detalhes do Usuário: ${username}`} />
      {user && (
        <UserCard
          avatarUrl={user.avatar_url}
          followers={user.followers}
          following={user.following}
          email={user.email}
          bio={user.bio}
        />
      )}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Repositórios</h4>
        <SortSelect order={sortOrder} onChange={handleSortChange} />
      </div>
      <RepoList repos={repos} />
    </div>
  );
}

export default UserDetails;
