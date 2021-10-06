import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Tarjetas from "./tarjetas";

const CardDeckPlanets = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="deckBox">
			<h1 className="deckHeader">PLANETS</h1>
			<div
				className="scrolling-wrapper, row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nonrap" }}>
				{store.listaPlanetas.map((elemento, index) => {
					return <Tarjetas key={elemento.uid} name={elemento.name} link="/planeta/" uid={elemento.uid} />;
				})}
			</div>
		</div>
	);
};

export default CardDeckPlanets;
