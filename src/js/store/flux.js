const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				 {
				 	id: 1,
				 	full_name: "Pedro Perez",
				 	email: "pedroperez@gmail.com",
				 	phone: "+58 7654321",
				 	address: "Zulia"
				 },
				 {
				 	id: 2,
				 	full_name: "Maria Gonzalez",
				 	email: "mg@gmail.com",
				 	phone: "+58 3219870",
				 	address: "Merida"
				 },
				 {
					id: 3,
					full_name: "Maria Nieto",
					email: "mgnn11@gmail.com",
					phone: "+58 223219870",
					address: "Acarigua"
				}
			],

			contId: 2
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: async () => {
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/project");
					let data = await resp.json();
					setStore({ contacts: data });
				} catch (err) {
					console.log(err);
				}
			},

			newContact: async newItem => {
				const auxStore = getStore();
				// setStore({ contId: auxStore.contId + 1 });
				// newItem.id = auxStore.contId;
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ ...newItem, agenda_slug: "project" })
					});
					let data = await resp.json();
					setStore({
						contacts: [...auxStore.contacts, data]
					});
					alert("Contacto agregado!");
				} catch (err) {
					console.log(err);
				}
			},

			removeContact: async contactDeleted => {
				const store = getStore();
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contactDeleted.id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
				} catch (err) {
					console.log(err);
				}

				getActions().getContacts();
			},

			editContact: async contactEdited => {
				const store = getStore();
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contactEdited.id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ ...contactEdited, agenda_slug: "project" })
					});
					if (resp.status == 200) {
						getActions().getContacts();
					} else alert("No se ha podido editar el contacto!");
				} catch (error) {
					console.log(err);
				}
				// const newContacts = store.contacts.map(contacto => {
				// 	if (contacto.id == contactEdited.id) {
				// 		return contactEdited;
				// 	} else return contacto;
				// });
				// setStore({
				// 	contacts: newContacts
				// });
			}
		}
	};
};

export default getState;
