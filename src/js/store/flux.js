const url_base = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			allContacts: [],
			singleContact: [],
			createContact: {
				full_name: "",
				email: "",
				agenda_slug: "Contacts_Luis",
				address: "",
				phone: ""
			}
		},
		actions: {
			// (Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAllContacts: name => {
				const currentStore = getStore();
				let url = base_url + "agenda/" + name;
				console.log(url);
				fetch(url)
					.then(res => res.json())
					.then(data => {
						let itemList = [];
						for (let item of data) {
							itemList.push(item);
						}
						console.log(typeof itemList);
						console.log(itemList);
						setStore({
							allContacts: itemList
						});
					})
					.catch(e => console.error(e));
			},
			loadContacts: () => {
				//const actions = getActions();
				actions.getAllContacts("Asanchez2");
			},
			deleteContact(id) {
				let url = `${url_base}${id}`;

				fetch(url, {
					method: "DELETE"
				})
					.then(response => response.json())
					.catch(error => console.error("Error:", error))
					.then(data => {
						data.msg;
					});
			},
			deletePhoneBook(agendaSlug) {
				let url = `${url_base}agenda/${agendaSlug}`;
				fetch(url, {
					method: "DELETE"
				})
					.then(response => response.json())
					.catch(error => console.error("Error:", error))
					.then(data => {
						data.msg;
					});
			},
			createContact() {
				let url = `${url_base}`;
				let store = getStore();
				let contact = store.createContact;

				contact.full_name = "Luis Sánchez-Arévalo";
				contact.email = "luis.sanchezarevalo@example.com";
				contact.address = "47568 NW 34ST, 33434 FL, USA";
				contact.phone = "7864445566";

				fetch(url, {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.catch(error => console.error("Error:", error))
					.then(data => data);
			}
		}
	};
};

export default getState;
