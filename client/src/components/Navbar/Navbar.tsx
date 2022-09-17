import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

import { FaWallet } from 'react-icons/fa';
import { useRef } from 'react';

const Navbar = () => {
  const location = useLocation();
  const animationDivRef = useRef<HTMLDivElement>(null);

  const pages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Records', path: '/records' },
    { name: 'Analytics', path: '/analytics' },
  ];

  const handleProfileClick = () => {
    animationDivRef?.current?.classList.toggle('active');
  };

  return (
    <div className="navbar">
      <div className="navbar__container container">
        <div className="navbar__right">
          <div className="navbar__logotype">
            <FaWallet size="2rem" color="white" />
          </div>
          <div className="navbar__navigation">
            {pages.map(page => (
              <Link
                to={page.path}
                key={page.name}
                className={`navbar__navigation-link 
                ${location.pathname === page.path ? 'active' : ''}`}
              ><span data-name={page.name}>{page.name}</span></Link>
            ))}
          </div>
        </div>

        <div className="navbar__left">
          <button className="navbar__record-btn">
            <span>+ Record</span>
          </button>

          <div className="navbar__profile" onClick={handleProfileClick}>
            <div className="navbar__profile-avatar">
              <img src="assets/avatar.jpg" alt="avatar" />
            </div>
            <p className="navbar__profile-username">
              Ihor Voznyi
            </p>
            <div className="navbar__profile-icon" ref={animationDivRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;