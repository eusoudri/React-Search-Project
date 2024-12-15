import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface HeaderProps {
  title: string;
}

function Header({}: HeaderProps) {
  return (
    <header className="mb-4 pt-3 text-center">
      <h1>
        <Link to="/">
          <img width="170px" src={logo} alt="logo" />
        </Link>
      </h1>
    </header>
  );
}

export default Header;
