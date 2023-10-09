import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav bg-slate-500 text-white flex justify-between  items-center  gap-8 py-0 px-4">
        <Link className=" h-full flex  items-center p-4 " to="/">
          WinningXI
        </Link>
        <ul className="flex justify-around gap-4">
          <CustomLink to="/matches">Matches</CustomLink>
          <CustomLink to="/standings">Standings</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const path = window.location.pathname;
  return (
    <li className={isActive ? " text-slate-800" : "hover:text-slate-600"}>
      <Link className="" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
