import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlaneta(params.id);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-6">
					<img src="https://via.placeholder.com/800x400" alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 col-6 text-center">
					<h1>{store.planeta.properties && store.planeta.properties.name}</h1>
					<p>{store.planeta.description}</p>
				</div>
			</div>
			<hr className="text-danger" />
			<div className="row">
				<div className="col-12">
					<table border="0" className="greenTable text-danger fw-bold text-center mx-auto fs-5">
						<thead>
							<tr>
								<th>Name</th>
								<th>Climate</th>
								<th>Population</th>
								<th>Orbital Period</th>
								<th>Rotation Period</th>
								<th>Diameter</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{store.planeta.properties && store.planeta.properties.name}</td>
								<td>{store.planeta.properties && store.planeta.properties.climate}</td>
								<td>{store.planeta.properties && store.planeta.properties.population}</td>
								<td>{store.planeta.properties && store.planeta.properties.orbital_period}</td>
								<td>{store.planeta.properties && store.planeta.properties.rotation_period}</td>
								<td>{store.planeta.properties && store.planeta.properties.diameter}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PlanetProfile;
