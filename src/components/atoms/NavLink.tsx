import React from "react";
import { ITheme } from "../../configs/theme";
import { Link } from "react-router-dom";

interface INavLink {
  to: string;
  title: string;
  theme?: ITheme;
}

const NavLink = ({ to, title, theme }: INavLink) => {
  return <Link to={to}>{title}</Link>;
};

export default NavLink;
