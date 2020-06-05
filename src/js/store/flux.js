const url_base = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
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
				let url = url_base + "agenda/" + name;
				console.log(url);
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							allContacts: data
						});
						let store = getStore();
						let contact = store.allContacts;
						console.log(contact);
					})
					.catch(e => console.error(e));
			},
			loadContacts: () => {
				const actions = getActions();
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
			createContact(newContact) {
				let url = `${url_base}`;
				let store = getStore();
				let contact = store.createContact;

				contact.full_name = newContact.full_name;
				contact.email = newContact.email;
				contact.address = newContact.address;
				contact.phone = newContact.phone;

				console.log(JSON.stringify(contact));
				console.log(url);

				fetch(url, {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => console.log(response.json()))
					.catch(error => console.error("Error:", error))
					.then(data => getActions().loadContacts());
			},
			editContact(id, editName, editPhone, editEmail, editAddress) {
				fetch(url_base + id, {
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: editName,
						phone: editPhone,
						email: editEmail,
						address: editAddress,
						agenda_slug: "Asanchez2"
					})
				}).then(() => {
					const currentStore = getStore();
					let url = url_base + "agenda/" + name;
					fetch(url)
						.then(res => res.json())
						.then(data => {
							setStore({
								allContacts: data
							});
							let store = getStore();
							let contact = store.allContacts;
							console.log(contact);
						})
						.catch(e => console.error(e));
				});
			},
			printOnConsole(data) {
				console.log(JSON.stringify(data));
			}
		}
	};
};

export default getState;
