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
					console.log("ESTOY EN FLUX, DATA: ", data);
				} catch (error) {
					console.log(error);
				}
			},

			//POST
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
			},
			// DELETE
			eliminarContacto: async contact_id => {
				//Delete One Particular Contact
				//DELETE: /apis/fake/contact/{contact_id}
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});

					if (response.ok) {
						console.log("User deleted successfully");
						getActions().obtenerInfo(); // pido los contactos de nuevo porque elimine uno
					} else {
						console.log("Error deleting user");
					}
				} catch (error) {
					console.log(error);
				}
			},

			//PUT
			actualizarContacto: async (a, b, c) => {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${user}`, {
					method: "PUT",
					body: JSON.stringify(updateData),
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}
	};
};

export default getState;
