import { objectOf } from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//-----AÑADIR CONTACTO-----
			addContact: (fullName, email, phone, address) => {
				let _datos = {
					full_name: fullName,
					email: email,
					agenda_slug: "snishino",
					address: address,
					phone: phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(_datos)
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			},

			//-----OBTENER CONTACTOS-----
			searchContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/snishino")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(err => console.log("Request Failed", err));
			},

			//DELETE CONTACTS
			onDelete: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			},

			//EDITAR CONTACTOS
			editContact: (id, fullName, email, phone, address) => {
				let _datos = {
					full_name: fullName,
					email: email,
					agenda_slug: "snishino",
					address: address,
					phone: phone
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(_datos),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
