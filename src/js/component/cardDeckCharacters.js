import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Tarjetas from "./tarjetas";

const CardDeckCharacters = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="deckBox">
			<h1 className="deckHeader">CHARACTERS</h1>
			<div
				className="scrolling-wrapper, row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nonrap" }}>
				{store.listaPersonajes.map((elemento, index) => {
					return <Tarjetas key={elemento.uid} name={elemento.name} link="/personaje/" uid={elemento.uid} />;
				})}
			</div>
		</div>
	);
};

export default CardDeckCharacters;
