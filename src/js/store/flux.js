const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			user: ""
		},

		actions: {
			setUser: () => {
				setStore({ user: "" });
			},

			getContacts: async () => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_awesome_agenda", {
					method: "GET"
				});
				response = await response.json();
				setStore({ contacts: response });
			},

			createContact: async data => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "my_awesome_agenda",
						address: data.address,
						phone: data.phone
					})
				});
				response = await response.json();
				getActions().getContacts();
			},

			editContact: async (id, data) => {
				console.log(data.name);
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "my_awesome_agenda",
						address: data.address,
						phone: data.phone
					})
				});
				response = await response.json();
			},

			deleteContact: async id => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id.id, {
					method: "DELETE",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
				getActions().getContacts();
			}
		}
	};
};

export default getState;
