const base_url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			allContacts: [],
			singleContact: []
		},
		actions: {
			//(Arrow) Functions that update the Store
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
				const actions = getActions();
				actions.getAllContacts("Asanchez2");
			}
		}
	};
};

export default getState;
