const getState = ({ getStore, getActions, setStore }) => {
	const urlPeople = "https://www.swapi.tech/api/people?page=1&limit=100";
	const urlPlanets = "https://www.swapi.tech/api/planets?page=1&limit=100";
	const urlPersonaje = "https://www.swapi.tech/api/people/";
	const urlPlaneta = "https://www.swapi.tech/api/planets/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaPersonajes: [],
			listaPlanetas: [],
			listaFavoritos: [],
			personaje: {},
			planeta: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPersonaje: id => {
				const store = getStore();
				fetch(urlPersonaje + id)
					.then(res => res.json())
					.then(data => {
						setStore({ personaje: data.result });
					})
					.catch(error => error);
				console.log(store);
			},
			getPlaneta: id => {
				const store = getStore();
				fetch(urlPlaneta + id)
					.then(res => res.json())
					.then(data => {
						setStore({ planeta: data.result });
					})
					.catch(error => error);
			},
			isActive: item => {
				const store = getStore();
				if (store.listaFavoritos.includes(item)) {
					return true;
				} else {
					return false;
				}
			},
			setFavourites: favourite => {
				const store = getStore();
				if (store.listaFavoritos.includes(favourite)) {
					getActions().removeFavourites(favourite);
				} else {
					setStore({ listaFavoritos: [...store.listaFavoritos, favourite] });
				}
			},
			removeFavourites: favourite => {
				const store = getStore();
				let newList = store.listaFavoritos.filter(elem => elem != favourite);
				setStore({ listaFavoritos: newList });
			},
			loadSomeData: () => {
				fetch(urlPeople, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						setStore({ listaPersonajes: data.results }); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});

				fetch(urlPlanets, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						setStore({ listaPlanetas: data.results }); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
