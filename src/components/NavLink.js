import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ text, to, className, activeClassName, ...props }) => {
  let { pathname } = useResolvedPath(to);
  let match = useMatch({ path: pathname, end: true });

  return (
    <Link
      to={to}
      className={`${className} ${match && activeClassName}`}
      {...props}
    >
      {text}

      <span className={`navlink_line ${match && "navlink_line-active"}`}></span>
    </Link>
  );
};

export default NavLink;
