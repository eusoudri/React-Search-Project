import '../../styles/global.scss';

interface UserCardProps {
  avatarUrl: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string | null;
}

function UserCard({
  avatarUrl,
  followers,
  following,
  email,
  bio,
}: UserCardProps) {
  return (
    <div className="details">
      <div className="d-flex flex-column align-items-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="img-thumbnail me-3 rounded-circle mb-4"
          width="150px"
        />
      </div>
      <div className="card p-3">
        <p>
          <i className="bi bi-people-fill"></i>
          <span>Seguidores:</span> {followers}
        </p>
        <p>
          <i className="bi bi-person-fill-add"></i>
          <span>Seguindo:</span> {following}
        </p>
        {email && (
          <p>
            <i className="bi bi-envelope-fill"></i>
            <span>E-mail:</span> {email}
          </p>
        )}
        {bio && (
          <>
            <hr />
            <p className="mt-2">{bio}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default UserCard;
