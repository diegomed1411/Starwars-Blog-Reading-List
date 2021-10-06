import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPersonaje(params.id);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-6">
					<img src="https://via.placeholder.com/800x400" alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 col-6 text-center">
					<h1>{store.personaje && store.personaje.name}</h1>
					<p>{store.personaje.description}</p>
				</div>
			</div>
			<hr className="text-danger" />
			<div className="row">
				<div className="col-12">
					<table border="0" className="greenTable text-danger fw-bold text-center mx-auto fs-5">
						<thead>
							<tr>
								<th>Name</th>
								<th>Birth Year</th>
								<th>Gender</th>
								<th>Height</th>
								<th>Skin Color</th>
								<th>Eye Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{store.personaje.properties && store.personaje.properties.name}</td>
								<td>{store.personaje.properties && store.personaje.properties.birth_year}</td>
								<td>{store.personaje.properties && store.personaje.properties.gender}</td>
								<td>{store.personaje.properties && store.personaje.properties.height}</td>
								<td>{store.personaje.properties && store.personaje.properties.skin_color}</td>
								<td>{store.personaje.properties && store.personaje.properties.eye_color}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CharacterProfile;
