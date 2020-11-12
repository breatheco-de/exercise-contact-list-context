import { object } from "prop-types";
import { useHistory } from "react-router-dom";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactlist: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchcontactlist: async () => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "GET"
				};
				//const response = await fetch(" https://assets.breatheco.de/apis/fake/contact/agenda");
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_aparral");

				const json = await response.json();
				console.log("--json--", json);
				setStore({ contactlist: json });
				//console.log("contactlist", contactlist);
			},

			addContact: async data => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "POST",
					body: JSON.stringify({
						full_name: data.full_name,
						email: data.email,
						agenda_slug: "Agenda_aparral",
						address: data.address,
						phone: data.phone
					})
				};
				//const response = await fetch(" https://assets.breatheco.de/apis/fake/contact/agenda");
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", config);

				const json = await response.json();
				console.log("--json--", json);
				if (json.id != undefined) {
					alert("Contacto agregado.");
				}
			},

			updateContact: async data => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "PUT",
					body: JSON.stringify({
						full_name: data.full_name,
						email: data.email,
						agenda_slug: "Agenda_aparral",
						address: data.address,
						phone: data.phone
					})
				};

				//const response = await fetch(" https://assets.breatheco.de/apis/fake/contact/agenda");
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + data.id, config);

				const json = await response.json();
				console.log("--json--", json);
				if (json.id != undefined) {
					alert("Contacto actualizado.");
				}
			},

			deleteContact: async id => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "DELETE"
				};
				//const response = await fetch(" https://assets.breatheco.de/apis/fake/contact/agenda");
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, config);

				const json = await response.json();
				console.log("--json--", json);
				if (json.msg != undefined && json.msg == "ok") {
					alert("Contacto eliminado.");
				}
			}
		}
	};
};

export default getState;
