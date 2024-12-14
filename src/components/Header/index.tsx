interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="mb-4">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
