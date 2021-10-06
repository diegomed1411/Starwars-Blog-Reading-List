import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Tarjetas = props => {
	const { store, actions } = useContext(Context);
	const urlImagen = "https://via.placeholder.com/150/000000/FFFF00?Text=STAR-WARS";
	const activo = { color: "#000", backgroundColor: "#ffc107", borderColor: "#ffc107" };

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={urlImagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={props.link + props.uid}>
						<button type="button" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						type="button"
						className="btn btn-outline-warning"
						style={actions.isActive(props.name) ? activo : {}}
						onClick={() => actions.setFavourites(props.name)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Tarjetas.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.string,
	link: PropTypes.string
};

export default Tarjetas;
