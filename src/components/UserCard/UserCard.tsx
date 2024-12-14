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
    <div className="card d-flex flex-row p-3">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="img-thumbnail me-3"
        style={{ width: '150px' }}
      />
      <div>
        <p>
          <strong>Seguidores:</strong> {followers}
        </p>
        <p>
          <strong>Seguindo:</strong> {following}
        </p>
        {email && (
          <p>
            <strong>Email:</strong> {email}
          </p>
        )}
        {bio && <p>{bio}</p>}
      </div>
    </div>
  );
}

export default UserCard;
