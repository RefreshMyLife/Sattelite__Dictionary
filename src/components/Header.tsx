import { Link } from 'react-router-dom';
import Search from './Search/Search';
import logo from '../assetc/img/laptop-logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="">
          <div className="header__logo">
            <img width="38" src={logo} alt="logo" />
            <div>
              <h1>React Dictionary</h1>
              <p>@by Andrei Zakharov</p>
            </div>
          </div>
        </Link>
        <Search />
      </div>
    </div>
  );
}

export default Header;
