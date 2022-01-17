// import { useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { SiNasa } from "react-icons/si";

const Header = () => {
  return (
    <header className={`header-wrapper`}>
      <div className={`header-logo`}>
        <Link to='/' className={`header-logo_link`}>
          <SiNasa />
        </Link>
      </div>
      <nav className={`header-nav`}>
        <ul className={`header-nav_list`}>
          <li className={`header-nav_item`}>
            <NavLink
              to='/'
              className={`header-nav_item-link`}
              activeClassName={`header-nav_item-link_active`}
              text={`Home`}
            />
          </li>
          <li className={`header-nav_item`}>
            <NavLink
              to='/curiosity'
              className={`header-nav_item-link`}
              activeClassName={`header-nav_item-link_active`}
              text={`Curiosity`}
            />
          </li>
          <li className={`header-nav_item`}>
            <NavLink
              to='/opportunity'
              className={`header-nav_item-link`}
              activeClassName={`header-nav_item-link_active`}
              text={`Opportunity`}
            />
          </li>
          <li className={`header-nav_item`}>
            <NavLink
              to='/spirit'
              className={`header-nav_item-link`}
              activeClassName={`header-nav_item-link_active`}
              text={`Spirit`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
