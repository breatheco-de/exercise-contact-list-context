const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// READ - GET
			obtenerInfo: async () => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/`);
					method;
					const data = await response.json();
					//setData(data);
					setStore({ contacts: data.results });
					console.log("ESTOY EN FLUX, DATA: ", data);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
