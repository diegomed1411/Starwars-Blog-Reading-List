import React from "react";
import "../../styles/home.scss";
import CardDeckCharacters from "../component/cardDeckCharacters";
import CardDeckPlanets from "../component/cardDeckPlanets";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS BLOG READING LIST</h1>
		<div style={{ overflow: "auto" }}>
			<CardDeckCharacters />
			<CardDeckPlanets />
		</div>
	</div>
);
