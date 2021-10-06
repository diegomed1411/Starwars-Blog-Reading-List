import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/logo-star-wars.jpg";
import Favourites from "./favourites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={starWarsLogo} alt="logo star wars" />
			</Link>
			<div className="ml-auto">
				<Favourites />
			</div>
		</nav>
	);
};
