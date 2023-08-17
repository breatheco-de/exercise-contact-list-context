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
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/AAA`);
					const data = await response.json();
					setStore({ contacts: data });
					//console.log("ESTOY EN FLUX, DATA: ", data);
				} catch (error) {
					//console.log(error);
				}
			},

			agregarAgenda: async (fullName, email, agendaSlug, address, phone) => {
				const contacto = {
					address: address,
					agenda_slug: agendaSlug,
					email: email,
					full_name: fullName,
					phone: phone
				};

				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						body: JSON.stringify(contacto),
						headers: { "Content-Type": "application/json" }
					});

					// if (true) {
					// 	console.log("dentro del POST: ", response);
					// 	console.log(response.ok);
					// 	getActions().obtenerInfo() // hago esto para ejecutar la funcion de obtenerInfo
					//const data = await response.json();
					// console.log("estoy en POST:", data);
					// console.log(response);
					if (response.status === 201) {
						getActions().obtenerInfo(); // pido los contactos de nuevo porque cree uno nuevo
					}
					// 	// const updatedContacts = [...getStore().contacts, newContact];
					// 	// setStore({ contacts: updatedContacts });
					// }
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
