const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: {
				full_name: "",
				email: "",
				phone: "",
				agenda_slug: "Agenda_JoseM",
				address: ""
			},
			alertCreateNewContact: "",
			alertUpdateContact: "",
			alertDelete: "",
			AllContacts: []
		},

		actions: {
			handleContactInput: e => {
				e.preventDefault();
				const { contact } = getStore();
				contact[e.target.name] = e.target.value;
				setStore({ contact: contact });
			},

			clearNotifications: () => {
				setStore({ alertCreateNewContact: "", alertUpdateContact: "" });
			},

			createNewContact: e => {
				e.preventDefault();
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(store.contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_JoseM", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllContacts: data, alertCreateNewContact: "show" });
								document.getElementById("createContact").reset();
							})
							.catch(error => {
								console.log(error);
							});
					});
			},

			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_JoseM", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ AllContacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContact: e => {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(resp => {
					if (resp.ok === true) {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_JoseM", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllContacts: data, alertDelete: "Contacto Eliminado" });
								alert(store.alertDelete);
							})
							.catch(error => {
								console.log(error);
							});
					}
				});
			},

			updateContact: (e, idform) => {
				e.preventDefault();
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "PUT",
					body: JSON.stringify(store.contact),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(resp => {
					if (resp.ok === true) {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_JoseM", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllContacts: data, alertUpdateContact: "show" });
							})
							.catch(error => {
								console.log(error);
							});
					}
				});
			},

			GetContactToUpdate: e => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.match.params.id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ contact: data });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
